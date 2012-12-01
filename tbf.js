var t;

    // Define the entry point
    $(document).ready(function()
    {

		// Get 3 users
		jQuery.ajax({
		  'url':'http://api.tum.bz/v1/users?limit=3&apikey=E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg',
		  'dataType':'jsonp',
		  'jsonp': 'callback',
		  'jsonpCallback': 'jsonpcallback'
		});//.success(function(data){

		//console.log(data[0])
		//$('#result').html(data[0].toString());

		//$('#result').html(data[0].username);
		//});

    });
    
    function jsonpcallback(data)
    {
		t = data[0].id;
		$('#result').html(data[0].username);
    }

alert(click());

function click()
{

	jQuery.ajax({
		  'url':'http://api.tum.bz/v1/users?limit=3&apikey=E2g2K9GvzBSvH6coGFOFl3ASLL5qjSgg',
		  'dataType':'jsonp',
		  async: false
		}).success(function(data)
		{
		return data[0].id
		//$('#result').html(data[0].toString());
		//$('#result').html(data[0].username);
		});

