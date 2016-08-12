var globalStr = 'Friends, delegates and fellow Americans: I humbly and gratefully accept your nomination for the presidency of the United States. Together, we will lead our party back to the White House, and we will lead our country back to safety, prosperity, and peace. We will be a country of generosity and warmth. But we will also be a country of law and order. Our Convention occurs at a moment of crisis for our nation. The attacks on our police, and the terrorism in our cities, threaten our very way of life. Any politician who does not grasp this danger is not fit to lead our country. Americans watching this address tonight have seen the recent images of violence in our streets and the chaos in our communities. Many have witnessed this violence personally, some have even been its victims. I have a message for all of you: the crime and violence that today afflicts our nation will soon come to an end. Beginning on January 20th 2017, safety will be restored. The most basic duty of government is to defend the lives of its own citizens. Any government that fails to do so is a government unworthy to lead. It is finally time for a straightforward assessment of the state of our nation. I will present the facts plainly and honestly. We cannot afford to be so politically correct anymore. So if you want to hear the corporate spin, the carefully-crafted lies, and the media myths the Democrats are holding their convention next week. But here, at our convention, there will be no lies. We will honor the American people with the truth, and nothing else. These are the facts: Decades of progress made in bringing down crime are now being reversed by this Administration’s rollback of criminal enforcement. Homicides last year increased by 17% in America’s fifty largest cities. That’s the largest increase in 25 years. In our nation’s capital, killings have risen by 50 percent. They are up nearly 60% in nearby Baltimore. In the President’s hometown of Chicago, more than 2,000 have been the victims of shootings this year alone. And more than 3,600 have been killed in the Chicago area since he took office. The number of police officers killed in the line of duty has risen by almost 50% compared to this point last year. Nearly 180,000 illegal immigrants with criminal records, ordered deported from our country, are tonight roaming free to threaten peaceful citizens. The number of new illegal immigrant families who have crossed the border so far this year already exceeds the entire total from 2015. They are being released by the tens of thousands into our communities with no regard for the impact on public safety or resources. One such border-crosser was released and made his way to Nebraska. There, he ended the life of an innocent young girl named Sarah Root. She was 21 years-old, and was killed the day after graduating from college with a 4.0 Grade Point Average. Her killer was then released a second time, and he is now a fugitive from the law. I’ve met Sarah’s beautiful family. But to this Administration, their amazing daughter was just one more American life that wasn’t worth protecting. One more child to sacrifice on the altar of open borders. What about our economy? Again, I will tell you the plain facts that have been edited out of your nightly news and your morning newspaper: Nearly Four in 10 African-American children are living in poverty, while 58% of African American youth are not employed. 2 million more Latinos are in poverty today than when the President took his oath of office less than eight years ago. Another 14 million people have left the workforce entirely. Household incomes are down more than $4,000 since the year 2000. Our manufacturing trade deficit has reached an all-time high – nearly $800 billion in a single year. The budget is no better. President Obama has doubled our national debt to more than $19 trillion, and growing. Yet, what do we have to show for it? Our roads and bridges are falling apart, our airports are in Third World condition, and forty-three million Americans are on food stamps. Now let us consider the state of affairs abroad. Not only have our citizens endured domestic disaster, but they have lived through one international humiliation after another. We all remember the images of our sailors being forced to their knees by their Iranian captors at gunpoint. This was just prior to the signing of the Iran deal, which gave back to Iran $150 billion and gave us nothing – it will go down in history as one of the worst deals ever made. Another humiliation came when president Obama drew a red line in Syria – and the whole world knew it meant nothing. In Libya, our consulate – the symbol of American prestige around the globe – was brought down in flames. America is far less safe – and the world is far less stable – than when Obama made the decision to put Hillary Clinton in charge of America’s foreign policy. I am certain it is a decision he truly regrets. Her bad instincts and her bad judgment – something pointed out by Bernie Sanders – are what caused the disasters unfolding today. Let’s review the record. In 2009, pre-Hillary, ISIS was not even on the map. Libya was cooperating. Egypt was peaceful. Iraq was seeing a reduction in violence. Iran was being choked by sanctions. Syria was under control. After four years of Hillary Clinton, what do we have? ISIS has spread across the region, and the world. Libya is in ruins, and our Ambassador and his staff were left helpless to die at the hands of savage killers. Egypt was turned over to the radical Muslim brotherhood, forcing the military to retake control. Iraq is in chaos. Iran is on the path to nuclear weapons. Syria is engulfed in a civil war and a refugee crisis that now threatens the West. After fifteen years of wars in the Middle East, after trillions of dollars spent and thousands of lives lost, the situation is worse than it has ever been before. This is the legacy of Hillary Clinton: death, destruction and weakness. But Hillary Clinton’s legacy does not have to be America’s legacy. The problems we face now – poverty and violence at home, war and destruction abroad – will last only as long as we continue relying on the same politicians who created them. A change in leadership is required to change these outcomes. Tonight, I will share with you my plan of action for America. The most important difference between our plan and that of our opponents, is that our plan will put America First. Americanism, not globalism, will be our credo. As long as we are led by politicians who will not put America First, then we can be assured that other nations will not treat America with respect. This will all change in 2017. The American People will come first once again. My plan will begin with safety at home – which means safe neighborhoods, secure borders, and protection from terrorism. There can be no prosperity without law and order. On the economy, I will outline reforms to add millions of new jobs and trillions in new wealth that can be used to rebuild America. A number of these reforms that I will outline tonight will be opposed by some of our nation’s most powerful special interests. That is because these interests have rigged our political and economic system for their exclusive benefit. Big business, elite media and major donors are lining up behind the campaign of my opponent because they know she will keep our rigged system in place. They are throwing money at her because they have total control over everything she does. She is their puppet, and they pull the strings. That is why Hillary Clinton’s message is that things will never change. My message is that things have to change – and they have to change right now. Every day I wake up determined to deliver for the people I have met all across this nation that have been neglected, ignored, and abandoned. I have visited the laid-off factory workers, and the communities crushed by our horrible and unfair trade deals. These are the forgotten men and women of our country. People who work hard but no longer have a voice. I AM YOUR VOICE.'


function writeLine (length, str) {
	debugger;
	//get markov object
	var markov = markovChain(str);
	var keys = Object.keys(markov)
	console.log(markov);
	var poemStr = '';
	for (var i = 0; i < length; i++) {
		var rando = Math.floor(Math.random() * keys.length);
		//call get random in here to send the word to getRandom function
		if(i >= length - 1) {
			poemStr += getRandom(keys[rando], markov) 
		} else {
			poemStr += getRandom(keys[rando], markov) + ' ' ;
		}
	}
	
	return poemStr[0].toUpperCase() + poemStr.slice(1) + '.';
}

function getRandom (word, markov) {
	debugger;
	//var markov length;
	var lengthOfArr = markov[word].length; 
	var randomNum = Math.floor((Math.random() * lengthOfArr)); 
	//console.log('getRandom: ', randomNum);
	return markov[word][randomNum];
}

function parseCorpus (str) {
	str = str.toLowerCase();
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

writeLine(50, globalStr);
