const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket_model');
const fs = require('fs');

let cur;
fs.readFile('currentUser.json', (err, data) => {
    if (err) {
        throw err;
    }
    cur = JSON.parse(data);
});

// DASHBOARD ROUTE SETUP
router.get('/dashboard', async (req, res) => {

    try {

        const allTickets = await Ticket.find();
        //  res.send(allTickets);
        console.log(cur.curuser);
        res.render('dashboard', { allTickets: allTickets, loggedInUser: cur });

    } catch (err) {
        res.send('Error' + err);
    }
});

module.exports = router