"use strict";
const mongoose = require('mongoose');
const basicAuth = require('basic-auth');
const crypto = require('crypto-js');
const userSchema = require('../models/user.model');
const userModel = mongoose.model('User', userSchema);

class AuthController {
    static mustBeAgent (req, res, next) {
        AuthController.checkUser(req, res, (user) => {
            if (user.rank >= 1)
                return next();
            else
                res.status(403).json("You must be Agent");
        });
    }
    static mustBeDetective (req, res, next) {
        AuthController.checkUser(req, res, (user) => {
            if (user.rank >= 2)
                return next();
            else
                res.status(403).json("You must be Detective");
        });
    }
    static mustBePoliceChief (req, res, next) {
        AuthController.checkUser(req, res, (user) => {
            if (user.rank >= 3)
                return next();
            else
                res.status(403).json("You must be Police Chief");
        });
    }

    static mustBeConnected (req, res, next) {
        if (!AuthController.isConnected (req, res))
            return;
        AuthController.checkUser(req, res, (user) => {
            res.status(200).json(user);
        });

    }

    static checkUser (req, res, callback) {
        if (!AuthController.isConnected (req, res))
            return;
        var userCredentials = basicAuth(req);
        userModel.findOne({username: userCredentials.name}, function (e, user) {
            if (!user || userCredentials.name != user.username || crypto.SHA1(userCredentials.pass) != user.password)
                res.status(403).send("Wrong credentials !");
            else
             callback(user);
        });
    }

    static isConnected (req, res) {
        var userCredentials = basicAuth(req);
        if (!userCredentials || !userCredentials.name || !userCredentials.pass) {
            res.status(401).send("You must be connected");
            return false;
        }
        return true;
    }
}

 module.exports = AuthController;