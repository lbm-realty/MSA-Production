const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    time: String,
    location1: String,
    description: String,
    location2: String
})

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;