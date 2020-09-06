const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket_model');
const { route } = require('./login');


router.get('/api/change-state/:id', (req, res) => {

    res.render('change-state', { _id: req.params.id });

});

router.post('/api/change-state', (req, res) => {
    const defaultid = req.body.defid;
    const state = req.body.curstate;
    let ticketstatus = 1;

    if (state === 'Not Started') {
        ticketstatus = 1;
    }
    else if (state === 'In Progress') {
        ticketstatus = 2;

    }
    else if (state === 'Resolved') {
        ticketstatus = 3;
    }
    else {
        ticketstatus = 4;
    }

    Ticket.findByIdAndUpdate(defaultid, { status: ticketstatus },
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated status code : ", ticketstatus);
                res.redirect('/dashboard');
            }
        });


});

module.exports = router