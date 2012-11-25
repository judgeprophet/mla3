 <?php 
 Print "Hello, World! <br />";


$curl_handle=curl_init();
curl_setopt($curl_handle,CURLOPT_URL,'http://api.tum.bz/v1/comments?user=fred&limit=3&apikey=nzaEhGbo4B9yAOn1GKveoSL003sexY9F');
curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER, true);
$buffer = json_decode(curl_exec($curl_handle));
curl_close($curl_handle);

if (empty($buffer))
{
    print "Sorry, example.com are a bunch of poopy-heads.<p>";
}
else
{
    //print $buffer;

var_dump($buffer);
echo "<br /><br /><br />";
echo $buffer[0]->username;
//  print "<SCRIPT>";
//  print "alert('$buffer->id');";
//  print "</SCRIPT>";
}

?> 