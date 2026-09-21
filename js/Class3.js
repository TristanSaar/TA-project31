const fs = require('fs');
const textRef = 'txt/vanasonad.txt';
//const dateET = require('./src/dateET');
const dateET = require('./src/dateTimeET');


function readTextFile(reference){
	let result = 'kahjuks teksti ei leitud';
    fs.readFile(reference, 'utf8',(err,data)=>{
		if(err){
			console.log('Viga: ' + err);
		} else {
			//return data;
			//showFullText(data);
			showText(data)
		}
	});
}
function showText(rawText){
	//teeme tekstist list (järjend, massiv, array)
let folkWisdom = rawText.split(';');
	//console.log(folkWisdom);
        console.log('Tänane vanasõna: ' + folkWisdom[Math.round(Math.random() * (folkWisdom.length - 1))]);
		console.log('Kell on: ' + dateET.fullTime());
}
	
readTextFile(textRef);
//console.log(dateFormattedET());
console.log(dateET.fullDate());
//console.log(dateET.fullTime());