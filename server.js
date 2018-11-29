const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const aboutRoute = require('./routes/about');
const adminRoute = require('./routes/admin');
const contactRoute = require('./routes/contact');
const homeRoute = require('./routes/home');
const servicesRoute = require('./routes/services');
const worksRoute = require('./routes/works');
const notFoundRoute = require('./routes/404');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'template');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/about', aboutRoute);
app.use('/admin', adminRoute);
app.use('/contact', contactRoute);
app.use('/works',worksRoute);
app.use('/services',servicesRoute);
app.use(homeRoute);
app.use(notFoundRoute);

app.listen( 3000 );