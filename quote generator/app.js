var quotes=['When ONTD was created, like other LiveJournal communities, it was operated exclusively by volunteer moderators.',
'LiveJournal was not involved in the day-to-day operation of the site.',
'ONTD, however, grew in popularity to 52 million page views per month in 2010 and attracted LiveJournal\'s attention.',
'By a significant margin, ONTD is LiveJournal\'s most popular community and is the only community with a \'household name.\'',
'In 2010, LiveJournal sought to exercise more control over ONTD so that it could generate advertising revenue from the popular community.',
'LiveJournal hired a then active moderator, Brendan Delzer, to serve as the community’s full time \'primary leader.\'',
'By hiring Delzer, LiveJournal intended to \'take over\' ONTD, grow the site, and run ads on it.'
];

function newQuote(){
	var random=Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML=quotes[random];	
	updateTweet(quotes[random]);
};

function updateTweet(quote) {
	document.getElementById('tweet_button').setAttribute("href", "https://twitter.com/intent/tweet?text=" + quote);
}
