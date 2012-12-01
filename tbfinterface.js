
var g_P1userName;
var g_P2userName;

$(document).ready(function() { 

    LoadPlayer();
    LoadOpponent();


    


//	$('#CtrlLoadPlayer').click( function(event) { event.preventDefault(); LoadPlayer(); LoadOpponent(); });

	$('#CtrlSplode').click( function(event) { event.preventDefault(); SplodBoum('#splode1'); });


    //Init Splots
    // Set the splode positions.
    var ArenaW = $("#Arena").width();
    var ArenaX = $("#Arena").offset().left;
    //var ScreenOffset = ($(window).width() - ArenaW) / 2;
    
    var SplodeLeft;
    SplodeLeft = (((ArenaW / 2) - $("#splode1").width() ) / 2) + ArenaX;
    $("#splode1").offset({left:SplodeLeft});

    var SplodeLeft = (((ArenaW / 2) - $("#splode1").width() ) / 2) + ArenaX + (ArenaW / 2);
    $("#splode2").offset({left:SplodeLeft});

});


var LoadPlayer = function ()
{
	//Get Players
	getPlayer( gotPlayer );
    getRndOpponent(gotOpponent);

    //Get Products
}
var gotPlayer = function (data)
{
	$("#Player1Name").html( data.firstname );
	$("#ThumbPlayer1").attr("src", data.avatar );
	
	g_P1userName = data.username;
	
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
}

var LoadOpponentMedia = function ()
{
    getRdnProduct( GotP2Product, g_P2userName);
}
var GotP2Product = function (data)
{
    $("#MediaName2").html( data.title );
    SplodBoum('#splode2');
}


var SplodBoum = function (SplotId)
{
    $(SplotId).animate({left: '+=20', top:'+=20', width: '-=40', height:'-=40'}, 200, SplodBoum1(SplotId) );
}
var SplodBoum1 = function (SplotId)
{
    $(SplotId).animate({left: '-=20', top:'-=20', width: '+=40', height:'+=40'}, 200 );
}
