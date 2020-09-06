const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const Ticket = require('../models/ticket_model');
const fs = require("fs"); 

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

        const currentUser = {
            curuser : `${req.body.user}`,
            curemp : `${req.body.empcode}`
        }

        fs.writeFile('currentUser.json', JSON.stringify(currentUser), () => {
            console.log('current user saved into json');
        })

        
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
                // else {
                //     console.log(result);
                // }
            });
        }

        res.redirect('/dashboard');
        

    } catch (error) {
        res.send(error);
    }

});


module.exports = router
