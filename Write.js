unction writeLine (length, str) {
	debugger;
	//get markov object
	var markov = markovChain(str);
	var keys = Object.keys(markov)
	console.log(markov);
	var poemStr = '';
	for (var i = 0; i < length; i++) {
		var rando = Math.floor(Math.random() * keys.length);
		//call get random somewhere in here to send the word to getRandom function
		if(i >= length - 1) {
			poemStr += getRandom(keys[rando], markov) 
		} else {
			poemStr += getRandom(keys[rando], markov) + ' ' ;
		}
	}
	
	return poemStr[0].toUpperCase() + poemStr.slice(1);
}

function getRandom (word, markov) {
	debugger;
	//var markov length;
	var lengthOfArr = markov[word].length; 
	var randomNum = Math.floor((Math.random() * lengthOfArr)); 
	console.log('getRandom: ', randomNum);
	return markov[word][randomNum];
}

function parseCorpus (str) {
	var str = str.toLowerCase();
	wordArr = str.match(/\w+/gmi);
	wordArr = wordArr.map(function(a) {
		if(a === 'i')
			return 'I'
		else
			return a;
	});
	return wordArr;
}

function markovChain (str) {
	debugger;
	var obj = {};
	
	//take string parameter and send to parseCorpus
	var parsedArr = parseCorpus(str);

	for (var i = 0; i < parsedArr.length; i++) {
		if(obj.hasOwnProperty(parsedArr[i]) && i < parsedArr.length - 1 ) {
			obj[parsedArr[i]].push(parsedArr[i+1]);
		} else if(i < parsedArr.length - 1){
			obj[parsedArr[i]] = [parsedArr[i+1]];
		} else {
			break;
		}
	}
	return obj;
}

writeLine(20, globalStr);
