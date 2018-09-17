var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var jade = require('jade');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-demo');
var db = mongoose.connection;

var routes = require('./routes/index');
var doctors = require('./routes/doctors');
var categories = require('./routes/categories');
var contact = require('./routes/contact');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// BodyParser Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
        secret: 'secret',
        saveUninitialized: true,
        resave: true
    })
);
app.use(flash());

app.use('/', routes);
app.use('/doctors', doctors);
app.use('/categories', categories);
app.use('/contact', contact);



var port = process.env.PORT || 3000;
app.use((req, res, next) => {
    res.status(200).json({
        message: 'its work!'
    });
});
app.listen(port,function(){
    console.log('running api-demo on port' +port)
});

