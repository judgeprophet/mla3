

$(document).ready(function() { 


	$('#CtrlLoadPlayer').click( function(event) { event.preventDefault(); SplodBoum(); });


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

  
 //   $('#splode1').animate({left:0}, 2000);

});


var InitAll = function ()
{

    


	//Get PLayer
	getPlayer( gotPlayer );



	//GetOpponent

//Get Products

//Init Arena




}




var gotPlayer = function (data)
{


	$("#Player1").html( data.firstname );
	
console.log(data);	

}


var SplodBoum = function ()
{



}