

$(document).ready(function() { 


	$('#CtrlLoadPlayer').click( function(event) { event.preventDefault(); LoadPayer(); LoadOpponent(); });
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


var LoadPayer = function ()
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
}

var LoadOpponent = function ()
{
	getRndOpponent( gotOpponent );


}
var gotOpponent = function (data)
{
console.log(data);
	$("#Player2Name").html( data.firstname );
	$("#ThumbPlayer2").attr("src", data.avatar );
}


var SplodBoum = function (SplotId)
{
    $(SplotId).animate({left: '+=20', top:'+=20', width: '-=40', height:'-=40'}, 200, SplodBoum1(SplotId) );
}
var SplodBoum1 = function (SplotId)
{
    $(SplotId).animate({left: '-=20', top:'-=20', width: '+=40', height:'+=40'}, 200 );
}
