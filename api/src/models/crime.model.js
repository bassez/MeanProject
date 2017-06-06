"use strict";

var mongoose = require('mongoose');

var CrimeSchema = new mongoose.Schema({
    compnos: {
        type: Number,
        required: true
    },
    naturecode: {
        type: String
    },
    incident_type_description: {
        type: String
    },
    main_crimecode: {
        type: String
    },
    reptdistrict: {
        type: String
    },
    reportingarea: {
        type: String
    },
    fromdate: {
        type: String
    },
    weapontype: {
        type: String
    },
    shooting: {
        type: String
    },
    domestic: {
        type: String
    },
    shift: {
        type: String
    },
    year: {
        type: String
    },
    month: {
        type: String
    },
    day_week: {
        type: String
    },
    ucrpart: {
        type: String
    },
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    streetname: {
        type: String
    },
    xstreetname: {
        type: String
    },
    location: {
        type: String
    }
});

CrimeSchema.method({

});

module.exports = CrimeSchema;