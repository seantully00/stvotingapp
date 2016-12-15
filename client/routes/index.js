'use strict';

var path = process.cwd();

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/index.html');
		});

	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/login.html');
		});
		
	app.route('/createpoll')
		.get(function (req, res) {
			res.sendFile(path + '/createpoll.html');
		});
		

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/login');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user.github);
		});

	app.route('/auth/twitter')
		.get(passport.authenticate('twitter'));

	app.route('/auth/twitter/callback')
		.get(passport.authenticate('twitter', { failureRedirect: '/login' }),
			function(req, res) {
    		// Successful authentication, redirect home.
    		res.redirect('/');
  });	
  
};