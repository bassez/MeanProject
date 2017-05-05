'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.method({

});

module.exports = UserSchema;