/**
 * Created by NileGeek on 5/21/17.
 */
const express = require('express');
const hbs     = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Maintenance handler
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

//home page
app.get('/', (req, res) => {
   res.render('home.hbs', {
       pageTitle: 'Home Page',
       welcomeMsg: 'Hello Said'
   });
});

//about page
app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page'
   });
});

//404 handler
app.use((req, res, next) => {
    res.render('404.hbs', {
        requestedPage: req.url
    });
});

app.listen(3000, () => {
   console.log('App Started on Port 3000');
});