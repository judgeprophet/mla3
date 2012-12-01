    // Define the entry point
    $(document).ready(function()
    {

		// // Get 3 users
		// jQuery.ajax({
		//   'url':'http://api.tum.bz/v1/users?limit=10&apikey=E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg',
		//   'dataType':'jsonp',
		//   'jsonp': 'callback',
		//   'jsonpCallback': 'jsonpcallback'
		// });//.success(function(data){

		//console.log(data[0])
		//$('#result').html(data[0].toString());

		//$('#result').html(data[0].username);
		//});

    });
    
    function jsonpcallback(data)
    {
    	console.log(data);
    }

function getPlayer(callback)
{

		jQuery.ajax({
		  'url':'http://api.tum.bz/v1/users/judgeprophet?apikey=E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg',
		  'dataType':'jsonp'
		}).success(function(data)
		{
			callback(data);
		});
}

function getOpponent(callback)
{

		jQuery.ajax({

		  'url':'http://api.tum.bz/v1/users?respecting=judgeprophet&limit=100&apikey=E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg',
		  'dataType':'jsonp'
		}).success(function(data)
		{
			callback(data);
		});
}




function getPlayerStats(callback)
{

		jQuery.ajax({
		  'url':'http://api.tum.bz/v1/reviews?user=judgeprophet&limit=200&apikey=E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg',
		  'dataType':'jsonp'
		}).success(function(data)
		{
			console.log(data.length);
			//callback(data);
		});
}


function getOpponnent()
{


	
 return "Opponnent";
}

function getAlternateArena()
{
	
 return "Opponnent";
}
