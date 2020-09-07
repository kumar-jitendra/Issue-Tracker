const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const router = require('./routes/dashboard');


// SETTING MONGODB CONNECTION
const url = 'mongodb://localhost/IssuesDB';
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;


// CONSOLE WHEN CONNECTED
con.on('open', () => {
    console.log('db connected...');
});


// ASSGINING APP AND PORT OBJECT
const app = express();
const port = 80;


// MIDDLEWARE SETUP
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTES
app.use('/', require('./routes/dashboard'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/ticket'));
app.use('/', require('./routes/change-state'));
app.use('/', require('./routes/change-to-done'));


// LISTENING ON PORT 80
app.listen(port, () => {
    console.log(`Server is running at port ${port}...`);
});

