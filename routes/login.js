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
        const allUsers = await User.find();
        let flag = false;

        allUsers.forEach(e => {
            if (e.empCode == req.body.empcode) {
                flag = true;
            }
        });

        if (!flag) {
            await user.save((error, result) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result);
                }
            });
        }

        //  console.log(allUsers);
        res.redirect('/dashboard');
        // res.render('dashboard', { allTickets: allTickets, userName : req.body.user });


    } catch (error) {
        res.send(error);
    }

});


module.exports = router
