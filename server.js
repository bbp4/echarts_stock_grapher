var express        = require('express');
var app            = express();
var morgan         = require('morgan');
var cookieParser   = require('cookie-parser');
var path           = require("path");

require('dotenv').load();

//prepare app scope for our own object instances ===============================
app.props = {};

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

//load api key
app.props["avkey"] = process.env.ALPHA_VANTAGE_KEY

//static config for assets only
//app.use('/css', express.static('app/assets/dist'));
//app.use('/js', express.static('app/assets/dist'));
//app.use('/fonts', express.static('app/assets/fonts'));

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, '/app/views'));

// controllers =================================================================
//require('./app/controllers/login.js')(app, passport);
//require('./app/controllers/admin.js')(app, passport);
//require('./app/controllers/files.js')(app);
require('./app/controllers/rest.js')(app);
require('./app/controllers/home.js')(app);


// launch ======================================================================
app.listen(process.env.PORT);
console.log('The magic happens on port ' + process.env.PORT);
