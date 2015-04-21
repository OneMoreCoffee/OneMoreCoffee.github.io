/**
 * Created by c0d3n4m3 on 08/04/2015.
 */

var writeToDocument = document.getElementById("htmlOutput").innerHTML;

////	Equation	is	�C	=	5/9	(�F	-	32).

function convertCelsiusToFahrenheit()
{
	var	degFahren	=	prompt("Enter	the	degrees	in Fahrenheit", 50);
	var	degCent;
	degCent	=	5/9	*	(degFahren -	32);
	//alert(degFahren	+	" \xB0	Fahrenheit is "	+	degCent	+	"\xB0 centigrade");
	if(degCent < 0)
	{
		document.getElementById("htmlOutput").innerHTML = "That's below the freezing point of water";
	}
	else if(degCent == 100)
	{
		document.getElementById("htmlOutput").innerHTML = "That's the boiling point of water";
	}
	else
	{
		document.getElementById("htmlOutput").innerHTML = "The conversion is: " + degCent + " Centigrade";
	}
}

function convertCmToInches()
{
	var cm = prompt("Enter Centimeters", "");
	var inches = cm * 0.394;
	if(!cm) {
		alert("Enter a value!");
		return false;
	}
	else {
		document.getElementById("htmlOutput").innerHTML = cm + " centimeters equals " + inches + " inches";
	}
}

function convertCupToPints()
{
	var cups = prompt("Enter Cups", "");
	var pints = cups * 0.5;
	document.getElementById("htmlOutput").innerHTML = cups + " cups equals " + pints + " pints";
	return false;
}

function convertFeetToMeters()
{
	var feet = prompt("Enter Feet", "");
	var meters = feet * 0.3048;
	document.getElementById("htmlOutput").innerHTML = feet + " feet equals " + meters + " meters";
	return false;
}

function convertMilesToKilometers()
{
	var miles = prompt("Enter Miles", "");
	var kilometers = miles * 1.609;
	document.getElementById("htmlOutput").innerHTML = miles + " miles equals " + kilometers + " kilometers";
	return false;
}

function AreaOfCircle() {
	var area;
	var radius = prompt("Enter Radius of Circle", "");
	area = Math.PI * Math.pow(radius, 2);
	document.getElementById("htmlOutput").innerHTML = "The area of the circle is " + Math.round(area);
}

function IsOverSixty()
{
	var age = prompt("Enter Age:", "");
	var isOverSix = parseInt(age, 10) > 60;
	document.getElementById("htmlOutput").innerHTML = "Older than 60: " + isOverSix;
}

function simpleAgeCheck()
{
	var myAge = parseInt(prompt("Enter your age", 30), 10);

	if(myAge >= 0 && myAge <= 10)
	{
		document.getElementById("htmlOutput").innerHTML = "MyAge is between 0 and 10<br />";
	}

	if(!(myAge >= 0 && myAge <= 10))
	{
		document.getElementById("htmlOutput").innerHTML = "MyAge is NOT between 0 and 10<br />";
	}

	if(myAge >= 80 || myAge <= 10)
	{
		document.getElementById("htmlOutput").innerHTML = "MyAge is 80 or above, OR 10 and below<br />";
	}

	if( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) )
	{
		document.getElementById("htmlOutput").innerHTML = "MyAge is between 30 and 39 or myAge is " + "between 80 and 89";
	}

}

function secretNumber()
{
	var secretNum = prompt("Pick a number between 1 and 5", "");
	secretNum = parseInt(secretNum, 10);

	switch(secretNum)
	{
		case 1:
		case 2:
			document.getElementById("htmlOutput").innerHTML = "Too Low";
			break;
		case 3:
			document.getElementById("htmlOutput").innerHTML = "you guessed the secret number!";
			break;
		case 4:
		case 5:
			document.getElementById("htmlOutput").innerHTML = "too high";
			break;
		default:
			document.getElementById("htmlOutput").innerHTML = "You need to enter a number between 1 and 5 dickhead..";
			break;
	}
}

function arrayConvert()
{
	var degFahren = [10,20,30,"twat",50,60,70];
	// using an array 'literal', the functionality is the same as using new Array(), but it requires less typing.
	var degCent = [];
	var loopCounter;

	for (loopCounter= 0; loopCounter <= degFahren.length - 1; loopCounter++)
	{
		if(isNaN(degFahren[loopCounter])) {
			alert("Data " + degFahren[loopCounter] + " at array index " + loopCounter + " is invalid");
			continue;
		}
		degCent[loopCounter] = returnCToF(degFahren[loopCounter]);
	}

	for (loopCounter = degFahren.length - 1; loopCounter >= 0; loopCounter--)
	{
		document.write("Value " + loopCounter + " was " + degFahren[loopCounter] + " degrees Fahrenheit");
		document.write(" which is " + degCent[loopCounter] + " degrees centigrade<br />");
	}
}

function compareStrings()
{
	var myName = prompt("What is your name?","");
	var htmlOutput = document.getElementById("htmlOutput");
	htmlOutput.innerHTML = myName;
}

function forInLoop()
{
	// clear the DOM element every time you run the loop so it doesn't stack on top of each other and cause a mess..
	document.getElementById("htmlOutput").innerHTML = "";

	var myArray = ["time", "doesn't", "wait", "for", "anyone", "you", "mug"];
	var arrayIndex;

	for(arrayIndex in myArray)
	{
		document.getElementById("htmlOutput").innerHTML += myArray[arrayIndex] + " ";
	}

}

function whileLoop()
{
	var testVar = 0;
	while(testVar <= 10)
	{
		document.getElementById("htmlOutput").innerHTML += testVar + "<br />";
		testVar++;
	}
}

function doWhileLoop()
{
	var userAge;
	do {
		userAge = prompt("Please enter your age", "");
	} while(isNan(userAge) == true);
}

function timesTables()
{
	document.getElementById("htmlOutput").innerHTML = "";
	var numInput = parseInt(prompt("Enter a number", ""));
	var timesBy;
	var result;

	document.getElementById("htmlOutput").innerHTML += "The " + numInput + " times table is:<br/.>";
	for(timesBy = 1; timesBy < 13; timesBy++)
	{
		result = timesBy * numInput;
		document.getElementById("htmlOutput").innerHTML += numInput + " * " + timesBy + " = " + result + "<br/>";
	}

}

function convertToCentigrade(degFahren)
{
	var degCent = 5 / 9 * (degFahren - 32);
	return degCent;
}


// functions in functions! :D
function toCentigrade(degFahren)
{
	var degCent = 5 / 9 * (degFahren - 32);
	document.getElementById("htmlOutput").innerHTML += degFahren + " Fahrenheit is " + degCent + " Celsius.<br/>";
}

function toFahrenheit(degCent)
{
	var degFahren = 9 / 5 * degCent + 32;
	document.getElementById("htmlOutput").innerHTML += degCent + " Celsius is " + degFahren + " Fahrenheit.<br/>";
}

function convert(converter, temperature)
{
	return converter(temperature);
}

//convert(toFahrenheit, 230);
//convert(toCentigrade, 752);

//------------------------------//
//------------------------------//

// TimeTable Function - Take two
//function timesTablesCustom(timesTable, timesByStart, timesByEnd)
//{
//	for(; timesByStart <= timesByEnd; timesByStart++) {
//		document.getElementById("htmlOutput").innerHTML += timesTable + " * " + timesByStart + " = "
//		+ timesByStart * timesTable + "<br />";
//	}
//}
//
//var timesTable;
//
//while((timesTable = prompt("Enter the times table", -1)) != -1) {
//	while (isNaN(timesTable) == true) {
//		timesTable = prompt(timesTable + " is not a " + "valid number, please retry", -1);
//	}
//
//
//	if (timesTable == -1) {
//		break;
//	}
//
//	document.getElementById("htmlOutput").innerHTML += "<br />The " + timesTable + " times table<br />";
//	timesTablesCustom(timesTable, 1, 12);
//
//}

// TimeTable Function - Take two
function timesTablesCustom()
{
	var result;
	var timesTable = parseInt(prompt("What Times Table do you want?", ""));
	var startPlace = parseInt(prompt("Where do you want to start from?", ""));
	var endPart = parseInt(prompt("Where do you want to finish?", ""));

	if(isNaN(timesTable))
	{
		document.getElementById("htmlOutput").innerHTML = "You didn't put in a number for " +
		"the times table, you put in this - " + timesTable + "<br />";
		timesTable = parseInt(prompt("What Times Table do you want?", ""));
	}
	if(isNaN(startPlace))
	{
		document.getElementById("htmlOutput").innerHTML = "You didn't put a number for the start, you " +
		"put this " + startPlace + "<br />";
		startPlace = parseInt(prompt("Where do you want to start from?", ""));
	}
	if(isNaN(endPart))
	{
		document.getElementById("htmlOutput").innerHTML = "You didn't put a number for the end, " +
		"you put this - " + endPart + "<br />";
		endPart = parseInt(prompt("Where do you want to finish?", ""));
	}

	document.getElementById("htmlOutput").innerHTML += "The " + timesTable + " times table from " + startPlace
	+ " * " + timesTable + " to " + endPart + " * " + timesTable + " is: <br /><br />";

	for(startPlace; startPlace <= endPart; startPlace++)
	{
		result = startPlace * timesTable;
		document.getElementById("htmlOutput").innerHTML += startPlace + " * " + timesTable + " = " + result + "<br/>";
	}

}


	//timesTablesCustom(getTimesTable, timesTableFrom, timesTableEnd);