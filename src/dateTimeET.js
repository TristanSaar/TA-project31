//Function dateFormattedET(){
const dateFormattedET = function(rahvakalender){
	let timeNow = new Date();
	const monthNameET = ['jaanuar', 'veebruar','märts','aprill',
	'mai','juuni','juuli','august','september',
'oktoober','november','detsember'];

const monthNameFolk = [
		'näärikuu', 'küünlakuu', 'paastukuu', 'jürikuu',
		'lehekuu', 'jaanikuu', 'heinakuu', 'lõikuskuu',
		'mihklikuu', 'viinakuu', 'kadrikuu', 'jõulukuu'
	];

	let monthNames;

	if(rahvakalender == 1){
		monthNames = monthNameFolk;
	} else {
		monthNames = monthNameET;
	}

	return timeNow.getDate() + '. ' +
		monthNames[timeNow.getMonth()] + ' ' +
		timeNow.getFullYear();
}
const addLeadZero = function(numValue){
	if(numValue < 10){
		numValue = '0' + numValue;
	}
	return numValue;
}

const timeFormattedET = function(){
	let timeNow = new Date();
	let hourNow =addLeadZero( timeNow.getHours());
    let minuteNow =addLeadZero( timeNow.getMinutes());
	let secondsNow =addLeadZero( timeNow.getSeconds());
	let timeFormatted = hourNow + ':' + minuteNow + ':' + secondsNow;
return timeFormatted;}


const dayFormattedET = function(){
	let timeNow = new Date();

	const dayNameET = [
		'pühapäev',
		'esmaspäev',
		'teisipäev',
		'kolmapäev',
		'neljapäev',
		'reede',
		'laupäev'
	];

	return dayNameET[timeNow.getDay()];
}


//ekspordin koik vajaliku
module.exports = {
	fullDate: dateFormattedET,
	fullTime: timeFormattedET,
	fullDay: dayFormattedET
};
