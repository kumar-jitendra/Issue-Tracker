const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket_model');

router.get('/api/change-to-done/:id', (req, res) => {

    res.render('change-to-done', { _id: req.params.id });

});


router.post('/api/change-to-done', (req, res) => {
    const defaultid = req.body.defid;

    Ticket.findByIdAndUpdate(defaultid, { status: 4 },
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {

                res.redirect('/dashboard');
            }
        });


});

module.exports = router