// All JS code goes in this file.

function palindrome(str){

		if(typeof str !== 'string') { return false;}

		if(str === '') { return true;}
		str = str.toLowerCase();
		str = str.split('').filter(function(c) { return /[a-zA-Z]/.exec(c) !== null; });

	var len = str.length;
		var isP = true;
		str.forEach(function(l, index) {
			if(l !== str[(len-1)-index]) {
				isP = false;
			}
		});

	console.log(str,isP);

    return isP;
}

function maxCoins(maxInt, coinVal) {

	return parseInt(maxInt / coinVal);

}

function coinDeterminer(num){
	var coins = [25,10,5,1];
	var currentMax = num;
	var count = coins.map(function(coin) {

		var numCoins = maxCoins(currentMax,coin);
		currentMax -= numCoins * coin;
		console.log(coin, numCoins);
		return numCoins;
	});

	return count.reduce( function(memo, numCoins) {
		memo += numCoins;
		return memo;
	} ,0);

}

function parseTime(str) {
	var all = /(\d+):(\d+)(am|pm)/.exec(str).slice(1);
	console.log(all);
	var addHours = all[2] === 'pm';
	var hour = parseInt(all[0]);
	if(hour === 12 && all[2] === 'am') {
		hour = 0;
	}
	var sep = {
		hour: hour + (addHours ? 12 : 0),
		minute: parseInt(all[1])
	};

	return (sep.hour * 60) + sep.minute;

}

function countingMinutes(strArr){
	 var all = strArr.split('-');
	console.log(all);
		var first = parseTime(all[0]);
		var second = parseTime(all[1]);
		var day = 24 * 60;

	console.log(first,second);

		if(first < second) {
			return second - first;
		}

		return day - (first - second);

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;