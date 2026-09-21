const firstName  = 'Tristan';
const lastName = 'Saar';
let firstValue = 7;
let secondValue = 3;


function authorsName(){
	//See polegi tegelikult funktsioon, vaid protseduur, sest ta ei tagasta mingit väärtust.
	
console.log('Programmeris ' + firstName + ' ' + lastName);
}
function randomValue(){
	return Math.round(Math.random() * 10);
}

/*function totalValue(){
  return firstValue + secondValue;
}*/
function totalValue(x, y){
	return x + y;
}
function myMath(){
	firstValue = randomValue();
	secondValue = randomValue();
	let myValue = totalValue(firstValue, secondValue)
	return myValue;
}
function timeFormattedET(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
    let minuteNow = timeNow.getMinutes();
	let secondsNow = timeNow.getSeconds();
	let timeFormatted = hourNow + ':' + minuteNow + ':' + secondsNow;
	return timeFormatted;
}
function dateFormattedET(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	const monthNameET = ['jaanuar', 'veebruar','märts','aprill',
	'mai','juuni','juuli','august','september',
	'oktoober','november','detsember'];
	
	
	//return dateNow + '.' + (monthNow + 1)+ '.' + yearNow;
	return dateNow + '.' + monthNameET[monthNow] +  ' ' + yearNow;
}
function dayPart(){
	let partOfDay = 'suvaline hetk';
	let hourNow = new Date().getHours();
	if(hourNow < 9){
		partOfDay = 'uneaeg';
	}
	if(hourNow>= 6 && hourNow < 10){
		partOfDay = 'hommikuste protseduuride aeg';
	}
	if(hourNow>= 10 && hourNow < 18){
		partOfDay = 'kooliaeg';
	}
	return partOfDay;
}

function weekDayET(){
	let weekDay = new Date().getDay();
	const weekDaynamesET = ['Pühapaev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev'];
	return weekDaynamesET[weekDay];	
}
function addLeadZero(numValue){
	if(numValue < 10){
		numValue = '0' + numValue;
	}
	return numValue;
}

	
authorsName();
//console.log(totalValue());
//console.log(randomValue());
//console.log(myMath());
console.log('kell on ' + timeFormattedET());
console.log('Täna on '+ weekDayET()+ ', ' + dateFormattedET());
//console.log('preagu on ' + dayPart() + '.');
