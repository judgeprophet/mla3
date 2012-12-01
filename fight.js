var g_Quotes = ["Double twist Back Chin...",
"Fist of Thor! (with his hammer)...",
"Elbows in the nuts...  ohhh Cheap Shot!",
"Finger in the eyes... Cheap Shot",
"There's no way you can do that with a stick!",
"Hit! Bruce Lee style!",
"Chuck Norris Did That!",
"I saw A Jame Bond Move!",
"I never tought of this kind of insertion"];

var g_plyHp = 100;
var g_oppHp = 100;

var attack = function (Type)
{
	if (Type.toUpperCase() = 'PLAYER')
	{
		g_plyHp =  g_plyHp - attackPower();	
	}
	else
	{
		g_oppHp =  g_oppHp - attackPower();
	}
	
}

var attackPower = function(AttackAttribute, ShieldAttribute)
{
	var damage = 0;

	damage = AttackAttribute - ShieldAttribute;

	if (damage < 0)
		damage = 0;

	return damage;
}

var getQuote = function()
{
	var ind = Math.floor(Math.random() * (g_Quotes.length-1)) + 0;
	
	return g_Quotes[ind];
}