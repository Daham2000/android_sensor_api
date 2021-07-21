const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    accelarometerX : {
        type : String
    },
    accelarometerY : {
        type : String
    },
    accelarometerZ : {
        type : String
    },
    gyroX : {
        type : String
    },
    gyroY : {
        type : String
    },
    gyroZ : {
        type : String
    },
    magnetometerX : {
        type : String
    },
    magnetometerY : {
        type : String
    },
    magnetometerZ : {
        type : String
    },
    pressure : {
        type : String
    },
    light : {
        type : String
    },
    temperature : {
        type : String
    },
    humidity : {
        type : String
    },
    proximity : {
        type : String
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Posts',PostSchema);