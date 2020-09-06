const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket_model');

// DASHBOARD ROUTE SETUP
router.get('/dashboard', async (req, res) => {

    try {
        const allTickets = await Ticket.find();
        //  res.send(allTickets);
        res.render('dashboard', { allTickets: allTickets });
        console.log("get request");

    } catch (err) {
        res.send('Error' + err);
    }
});

module.exports = router