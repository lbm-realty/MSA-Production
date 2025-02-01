const mongoose = require('mongoose');

const prayersSchema = new mongoose.Schema({
    prayerHours: [String],
    from: Date,
    to: Date,
})

const PrayerHours = mongoose.model("PrayerHours", prayersSchema);
module.exports = PrayerHours;