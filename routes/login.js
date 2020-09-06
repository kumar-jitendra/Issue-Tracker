const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const Ticket = require('../models/ticket_model');

// LOGIN ROUTE SETUP
router.get('/', (req, res) => {
    res.render('login');
});

router.post('/api/login', async (req, res) => {
    const user = new User({
        
        userName: req.body.user,
        empCode: req.body.empcode
    });

    try {
        const currentuser = await user.save();
        const allTickets = await Ticket.find();
    
        //  res.send(allTickets);
        //res.redirect('/dashboard');
        res.render('dashboard', { allTickets: allTickets, empCode : req.body.empcode });
        console.log(currentuser);
        

    } catch (error) {
        res.send(error);
    }

});


module.exports = router