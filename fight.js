var g_Quotes = [["Double twist Back Chin...", 10],
["Fist of Thor! (with his hammer)...", 20],
["Elbows in the nuts...  ohhh Cheap Shot!", 15],
["Finger in the eyes... Cheap Shot", 3],
["There's no way you can do that with a stick!", 5],
["Kick! Bruce Lee style!", 10],
["OOOOOOYYYYYYYAAAAAArrrrrhhhhh *hold breath* RELEASE!", 10],
["Chuck Norris Did That!", 10],
["I saw That in a James Bond Movie!", 10],
["Dick SLAP!", 14],
["I never tought of this kind of insertion", 20]];

var g_Arenas = [
"arena1.png",
"arena2.png"
];

var g_BaseDamage = 10;
var g_plyHp = 100;
var g_oppHp = 100;

var attack = function (AttackType, Defences, Hp)
{
	var dmg = g_BaseDamage;
	var quote = " OMG!";

	switch (AttackType)
	{
		case 'Drama', 'Alternative':
			dmg = dmg - Defences[0];
			quote = " I'm not your mother!";
		break;
		case 'Comedy', 'Fantasy', 'Science Fiction':
			dmg = dmg - Defences[1];
			quote = " You nerdness, has no effect!";
		break;
		case 'Crime', 'Hip Hop/Rap', 'Action', 'Thriller', 'Rock':
			dmg = dmg - Defences[2];
			quote = " I've fallen and can't get up!";
		break;
		case 'Romance', 'Electronic':
			dmg = dmg - Defences[3];
			quote = " Don't worry I have my GOGGLE!";
		break;
		case 'Foreigm', 'Soundtrack', 'Action and Adventure':
			dmg = dmg - Defences[4];
			quote = " Adding injuries to humiliation";
		break;
		case 'Family', 'French Pop', 'Dance':
			dmg = dmg - Defences[5];
			quote = " The Never Ending Story.";
		break;
		case 'Surprise':
			var sup = getQuote();
			quote = sup[0];
			dmg = sup[1];
			//Conscientiousness++;
		break;
	}

	var HpLeft = Hp;
		HpLeft =  HpLeft  - dmg;
		return [HpLeft, quote];
}

// var attackPower = function(AttackType, Defences)
// {
// 	var damage = 0;

// 	damage = AttackAttribute - ShieldAttribute;

// 	if (damage < 0)
// 		damage = 0;

// 	return damage;
// }

var getQuote = function()
{
	var ind = Math.floor(Math.random() * (g_Quotes.length-1)) + 0;	
	return g_Quotes[ind];
}

var getRdnArena = function()
{
	var ind = Math.floor(Math.random() * (g_Arenas.length-1)) + 0;	
	return g_Arenas[ind];
}