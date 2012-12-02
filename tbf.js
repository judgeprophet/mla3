// Define the entry point
var TUMBZ_KEY = 'E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg';

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

function getPlayer(callback)
{

		jQuery.ajax({
		  'url':'http://api.tum.bz/v1/users/judgeprophet?apikey=' + TUMBZ_KEY,
		  'dataType':'jsonp'
		}).success(function(data)
		{
			callback(data);
		});
}

function getRndOpponent(callback, username)
{

//({id:"4f10296eb943a60001009ba6", 
// username:"mchamplain", 
// profile_url:"http://tum.bz/u/mchamplain", 
// firstname:"Marc A.", 
// lastname:"Champlain", 
// avatar:"https://secure.gravatar.com/avatar/dee0c672d9860b3319a4a87d99ccebc6.png?d=http://tum.bz/images/avatar-default-aqua.png&r=R&s=100", 
// bio:"n/a", 
// like:"n/a", 
// like_not:"n/a", 
// personal_website:null, 
// city:null})

		jQuery.ajax({
		  'url':'http://api.tum.bz/v1/users?respecting=' + username + '&limit=100&apikey=' + TUMBZ_KEY,
		  'dataType':'jsonp'
		}).success(function(data)
		{
			var ind = Math.floor(Math.random() * (data.length-1)) + 0;
			callback(data[ind]);
		});
}

//function getPlayerStats(username)
function getPlayerStats(callback, username)
{
	//var url = 'http://api.tum.bz/v1/reviews?user=' + username + '&limit=200&apikey=' + TUMBZ_KEY;
	var url = 'http://api.tum.bz/v1/products?cat=movie&top_products_for_user=' + username + '&limit=100&apikey=' + TUMBZ_KEY;

	jQuery.ajax({
	  'url':url,
	  'dataType':'jsonp'
	}).success(function(data)
	{

		var Openness = 0;
		var Conscientiousness = 0
		var Extraversion = 0;
		var Agreeableness = 0;
		var Neuroticism = 0;
		var Agressif = 0;


		var hp =  data.length;
		for(var i = 0; i < hp; i++)
		{
			var genres =  data[i].genres.split(', ');
			for( var j = 0; j < genres.length; j++)
			{
				switch (genres[j])
				{
					case 'Drama', 'Alternative':
						Extraversion++;
					break;
					case 'Comedy', 'Fantasy', 'Science Fiction':
						Agreeableness++;
					break;
					case 'Crime', 'Hip Hop/Rap', 'Action', 'Thriller', 'Rock':
						Agressif++;
					break;
					case 'Romance', 'Electronic':
						Neuroticism++;
					break;
					case 'Foreigm', 'Soundtrack', 'Action and Adventure':
						Openness++;
					break;
					case 'Family', 'French Pop', 'Dance':
						Conscientiousness++;
					break;
				}
			}
		}
		//console.log(Openness + ' ' + Conscientiousness + ' ' + Extraversion + ' ' + Agreeableness + ' ' + Neuroticism + ' ' + Agressif);
		//console.log(data);
//		console.log([Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism, Agressif]);
		callback([Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism, Agressif]);
	});
}

//Genre :  Comedy, Crime, Drama, Romance
function getRdnProduct(callback, username)
{
			//var url = 'http://api.tum.bz/v1/reviews?user=' + username + '&limit=200&apikey=' + TUMBZ_KEY;
		var url = 'http://api.tum.bz/v1/products?top_products_for_user=' + username + '&limit=100&apikey=' + TUMBZ_KEY;

		jQuery.ajax({
		  'url':url,
		  'dataType':'jsonp'
		}).success(function(data)
		{
			var ind = Math.floor(Math.random() * (data.length-1)) + 0;
			callback(data[ind]);
		});

}
