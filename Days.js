const prompt = require("prompt-sync")();
let day = prompt("What day is today? ");
switch(day.toLowerCase()){
	case "monday":
		console.log("Today is monday");
		break;

	case "tuesday":
		console.log("Today is tuesday");
		break;
	case "wednesday":
		console.log("Today is Wednesday");
		break;
	case "thursday":
		console.log("Today is thursday");
		break;
	case "friday":
		console.log("Today is friday");
		break;
	case "saturday":
		console.log("Today is saturday");
		break;
	case "sunday":
		console.log("Today is sunday");
		break;
	default:
		console.log("Any other day");

 
}