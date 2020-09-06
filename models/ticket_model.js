const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
    
    status: {
        type:Number,
        default:1,
        required: true
    },

    ticketid: {
        type: Number,
        required: true
        
    },
    devname: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },


});

module.exports = mongoose.model('Ticket', ticketSchema)