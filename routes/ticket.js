const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket_model');
// const push = require('push.js');

// CREATE TICKET ROUTE SETUP
router.get('/api/create-ticket', (req, res) => {
    res.render('ticket');
});

router.post('/api/create-ticket', async (req, res) => {

    const ticket = new Ticket({
        ticketid: req.body.ticketid,
        devname: req.body.devname,
        title: req.body.inputTitle,
        desc: req.body.inputDescription
    });
    console.log(ticket);
    
    try {
        const allTickets = await ticket.save();
        // console.log(allTickets);
      
        res.redirect('/dashboard');
    } catch (err) {
        res.send("error")
    }
});

module.exports = router