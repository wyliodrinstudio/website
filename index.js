'use strict';

require ('dotenv').config ();
var express = require ('express');
var morgan = require ('morgan');
var bodyParser = require ('body-parser');
var path = require ('path');
var cors = require ('cors');
var nodemailer = require ('nodemailer');
var _ = require ('lodash');
var request = require ('request');
var studio = require ('./studio.json');
var Poet = require ('poet');
var moment = require ('moment');

var app = express ();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 'loopback');
app.use (bodyParser.json ());
app.use (morgan('dev'));

app.use (function (req, res, next)
{
	next ();
});

app.use (express.static (path.join (__dirname,'public'), { cacheControl: false }));

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD
	}
});

app.use (function getIP (req, res, next)
{
	req.userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	next ();
});

app.get ('/studio/information', cors (), function (req, res)
{
	// res.send ({
	// 	id: '1',
	// 	title: 'Information',
	// 	message: 'this is <i>information</i> text'
	// });
	res.send ({});
});

app.get ('/', function (req, res)
{
	res.render ('index', {pagename: '', studio:studio});
});

app.get ('/:page', function (req, res, next)
{
	let pages = ['iot-solutions', 'blog', 'iot-features', 'iot-education', 'contact', 'terms', 'privacy', 'recaptcha',];
	if (_.indexOf (pages, req.params.page)>=0)
	{
		if (req.params.page === 'blog')
		{
			res.locals.posts = null;
			res.locals.moment = moment;
			res.locals.page = 1;
			req.params.page = 'page';
		}
		res.render (req.params.page, {pagename: req.params.page, studio: studio});
	}
	else next ();
});

app.get ('/:page/:title', function (req, res, next)
{
	let pages = ['post', 'blog'];
	if (_.indexOf (pages, req.params.page)>=0)
	{
		res.locals.moment = moment;
		res.locals.pagename = 'blog';
		res.locals.studio = studio;
		next ();
	}
	else next ();
});

app.post ('/email', function (req, res)
{
	console.log (req.body);
	request ({
		url: 'https://www.google.com/recaptcha/api/siteverify', 
		method: 'POST',
		form : {
			secret: process.env.RECAPTCHA_SECRET_KEY,
			response: req.body.recaptcha,
			remoteip: req.userIP
		}
	},
	function (err, response, body)
	{
		console.log (body);
		var sent = false;
		var error = undefined;
		try
		{
			body = JSON.parse (body);
			console.log (body);
			if (body && body.success)
			{
				// console.log (process.env);
				const mailOptions = {
					from: process.env.EMAIL_USER, // sender address
					to: 'office@wyliodrin.com', // list of receivers
					subject: 'Website contact', // Subject line
					html: 'From: '+req.body.name+'<br>Email: '+req.body.email+'<br>Phone Number: '+req.body.phone_number+'<br>Company: '+req.body.company+'<br>Message:<br>'+req.body.message// plain text body
				};
			
				transporter.sendMail(mailOptions, function (err, info) {
					console.log (err);
					if(err)
					{
						sent = false;
						error = err;
					}
					else
					{
						sent = true;
					}
					res.send ({sent: sent, error: error});
				});
			}
			else
			{
				error = 'recaptcha';
			}
		}
		catch (e)
		{
			return res.send (e.stack);
			error = e.message;
		}
		if (error)
		{
			res.send ({sent: sent, error: error});
		}
	});
});

var poet = Poet (app, {
	posts: path.join (__dirname, 'blog'),
	postsPerPage: 3,
	metaFormat: 'json',
	routes: {
		'/post/:post': 'post',
		'/blog/:page': 'page',
    	'/tags/:tag': 'tag',
		'/categories/:category': 'category'
	},
	readMoreLink ()
	{
		return '';
	}
});

poet.init ().then ();

// console.log (app._router.stack);

app.use (function (req, res)
{
	res.status(404).render ('notfound', {pagename: 'notfound', studio: studio});
});

app.use (function (err, req, res, next)
{
	console.log (err);
	res.status(500).render ('error', {pagename: 'error', studio: studio});
});

let serverListener = app.listen (process.env.PORT || 8080, function (err) {
	if (!err) console.log ('Listening on port '+serverListener.address().port);
	else console.log (err);
});

