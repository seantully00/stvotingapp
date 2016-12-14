'use strict';

module.exports = {
	'twitterAuth': {
		'consumerKey': process.env.TWITTER_CONSUMER_KEY,
    	'consumerSecret': process.env.TWITTER_CONSUMER_SECRET,
    	'callbackURL': 'https://stvotingapp.herokuapp.com/auth/twitter/callback'
	}
};
