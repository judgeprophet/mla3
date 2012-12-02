var g_P1userName;
var g_P2userName;
var ArenaX, ArenaY, ArenaW, ArenaH;
var g_HP1 = 70;
var g_HP2 = 70;

$(document).ready(function() { 

    LoadPlayer();
    LoadOpponent();


    


//	$('#CtrlLoadPlayer').click( function(event) { event.preventDefault(); LoadPlayer(); LoadOpponent(); });

	$('#CtrlSplode').click( function(event) { event.preventDefault(); SplodBoum('#splode1'); });


	$('#Attack1').click( function(event) { event.preventDefault(); GoAttack('#Attack1'); });
	$('#Attack2').click( function(event) { event.preventDefault(); GoAttack('#Attack2'); });
	$('#Attack3').click( function(event) { event.preventDefault(); GoAttack('#Attack3'); });
	$('#Attack4').click( function(event) { event.preventDefault(); GoAttack('#Attack4'); });
	$('#Attack5').click( function(event) { event.preventDefault(); GoAttack('#Attack5'); });
	$('#Attack6').click( function(event) { event.preventDefault(); GoAttack('#Attack6'); });
	$('#Attack7').click( function(event) { event.preventDefault(); GoAttack('#Attack7'); });


    // Set the splode positions.
    ArenaW = $("#Arena").width();
    ArenaH = $("#Arena").height();
    ArenaX = $("#Arena").offset().left;
    ArenaY = $("#Arena").offset().top;
    //var ScreenOffset = ($(window).width() - ArenaW) / 2;
    
    //Init Splots
    var SplodeLeft;
    SplodeLeft = (((ArenaW / 2) - $("#splode1").width() ) / 2) + ArenaX;
    $("#splode1").offset({left:SplodeLeft});

    var SplodeLeft = (((ArenaW / 2) - $("#splode1").width() ) / 2) + ArenaX + (ArenaW / 2);
    $("#splode2").offset({left:SplodeLeft});

    //Init Attacks
    $("#splode2").offset({left:SplodeLeft});
    
    SetLife(1, 100);
    SetLife(2, 100);   
    
    SetAttacksNames(1, null);
//    SetAttacksNames(2, null);
    
});

var SetLife = function(PlayerNo, Life)
{
    var LifeBar = "#Life" + PlayerNo;
    
    var hp = eval('g_HP'+PlayerNo);

    var w = ((ArenaW/2)-50) * hp / 100;
    var x = (((ArenaW/2) - w) / 2) + ArenaX;
    
    if (PlayerNo == 2) x += (ArenaW/2);
    
    $(LifeBar).width(w);
    
    $(LifeBar).offset({top: ArenaY+300, left: x});



}

var SetAttacksNames = function(PlayerNo, Genres)
{
    var HowMany = 0;
    if (Genres != null) {
        HowMany = Genres.length;
    }
       
    for (var i=0; i < 7; i++) {
        var Label1;
        var Label2;
        if (PlayerNo == 1) {
            Label1 = "#Attack" + (i+1);
            Label2 = "#Punch" + (i+1);
        }
        else {
            Label1 = "#OppAttack" + (i+1);
            Label2 = "#OppPunch" + (i+1);
        }
        
        if (HowMany <= i) {
            $(Label1).hide();
            $(Label2).hide();
        }
        else {
            $(Label1).show();
            $(Label2).show();
            
            $(Label1).html( Genres[i] );
        }
      
        var x  = ArenaX+20;
        if (PlayerNo == 2) x = ArenaX+(ArenaW/2);
      
        $(Label1).offset({top:ArenaY+ArenaH+(i*70)+10, left:x});
        $(Label2).offset({top:ArenaY+ArenaH+(i*70), left:x});

    }
}


var LoadPlayer = function ()
{
	//Get Player, it will then get opponent and Media for both.
	getPlayer( gotPlayer );
	
}
var gotPlayer = function (data)
{
	$("#Player1Name").html( data.firstname );
	$("#ThumbPlayer1").attr("src", data.avatar );
	
	g_P1userName = data.username;
	
    getRndOpponent(gotOpponent, g_P1userName);

    LoadPlayerMedia();
}

var LoadOpponent = function () 
{
	getRndOpponent( gotOpponent );

}
var gotOpponent = function (data)
{
	$("#Player2Name").html( data.firstname );
	$("#ThumbPlayer2").attr("src", data.avatar );
	g_P2userName = data.username;
	
	LoadOpponentMedia();
}

var LoadPlayerMedia = function ()
{
    getRdnProduct( GotP1Product, g_P1userName);
}
var GotP1Product = function (data)
{
    $("#MediaName1").html( data.title );
    SplodBoum('#splode1');
    
    $("#Fighter1").offset({top:1000, left:ArenaX+30});
    $("#Fighter1").attr("src", data.img_cover);
    
    SetAttacksNames(1, data.genres.split(', ') );

    $("#Fighter1").animate({top:350}, 600, FigtherLinger("#Fighter1") );
      
    
}

var LoadOpponentMedia = function ()
{
    getRdnProduct( GotP2Product, g_P2userName);
}
var GotP2Product = function (data)
{
    $("#MediaName2").html( data.title );
    SplodBoum('#splode2');
    
    $("#Fighter2").offset({top:1000, left:ArenaX+(ArenaW/2)+50});
    $("#Fighter2").attr("src", data.img_cover);
    
    SetAttacksNames(2, data.genres.split(', ') );

    
    $("#Fighter2").animate({top:350}, 600, FigtherLinger("#Fighter2") );
  
    
}

var ThisAttackName1;
var GoAttack = function (TagId)
{
    ThisAttackName1 = $(TagId).text();
    getPlayerStats(GoAttack1, g_P1userName);
    
    SplodBoum('#splode1');
}

var GoAttack1 = function (data)
{
    var q = attack(ThisAttackName1, data, g_HP2);
    g_HP2 = q[0];
    
    SetLife(2, g_HP2);
    
    setTimeout(OpponentAttack, 600);
}

var ThisAttackName2;
var OpponentAttack = function()
{
    //Randomize this!!!
    TagId = "#OppAttack1";
    
    ThisAttackName2 = $(TagId).text();
    getPlayerStats(OpponentAttack1, g_P2userName);
    
    SplodBoum('#splode2');

}
var OpponentAttack1 = function (data)
{
    var q = attack(ThisAttackName2, data, g_HP1);
    g_HP1 = q[0];
    
    SetLife(1, g_HP1);
}


var SplodBoum = function (SplotId)
{
    $(SplotId).animate({left: '+=30', top:'+=30', width: '-=60', height:'-=60'}, 200, SplodBoum1(SplotId) );
}
var SplodBoum1 = function (SplotId)
{
    $(SplotId).animate({left: '-=30', top:'-=30', width: '+=60', height:'+=60'}, 200 );
}

var FigtherLinger = function(FighterID)
{
//    new 
//var ind = Math.floor(Math.random() * (data.length-1)) + 0;
//    $("#Fighter1").animate({top:350}, 600, FigtherLinger("#Fighter1") );

}