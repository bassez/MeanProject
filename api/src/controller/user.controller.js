"use strict";

const auth    = require('basic-auth');
const UserShema = require('../models/user.model');
const mongoose = require('mongoose');
const Crypto = require('crypto-js');

const UserModel = mongoose.model('User', UserShema);
// mongoose.connect('mongodb://localhost:27017/meanProject');
//todo RES>JSON
class UserController {

    static create (req, res, next) {
        if(Object.keys(req.body).length === 0 || Object.keys(req.body).length !== 4){
            res.status(400).json("Error in body");
        }
        else {
            let encryptedPass = ""+Crypto.SHA1(req.body.pass);

            let user = new UserModel({
                mail     : req.body.mail,
                username : req.body.name,
                password : encryptedPass,
                rank     : req.body.rank,
                isValid  : false
            });
            user.save(function (e) {
                console.log(e);
            });

            res.json("User created");
        }
    }

    static read (req, res, next) {
            UserModel.findById(req.params.id, function (err, results) {
                if (err) console.log(err);
                if (results === null)
                    console.log("No such user")
                else{
                    console.log(results);
                    res.json(results);
                }
            });
    }

    static update (req, res, next) {
            if(req.body.pass)
                req.body.pass = ""+Crypto.SHA1(req.body.pass);

            UserModel.findByIdAndUpdate(req.params.id, req.body, function (err, results) {
                if (err) console.log(err);

                if (results === null)
                    console.log("No such user")
                else
                    console.log(results);
            });
            res.json("update");
    }

    static delete (req, res, next) {
            UserModel.findOneAndRemove(req.params.id, function (err, results) {
                if(err) console.log("Error findOneAndRemove function : ", err);
                if(results === null)
                    console.log("No such user")
                else
                    console.log(results);
            });
            res.json("Delete");
    }

    static validate (req, res, next) {
            UserModel.findByIdAndUpdate(req.params.id, {isValid: true}, function (err, results) {
                if (err) console.log(err);
                if (results === null)
                    console.log("No such user")
                else
                    console.log(results);
            });
            res.json("User was successfully validated");
    }

    static readAll (req, res, next) {
            UserModel.find(function (err, results) {
                if (err) console.log(err);
                if (results === null)
                    res.json.log("No users in database")
                else{
                    console.log(results);
                    res.json(results);
                }
            });
    }


    static readPending (req, res, next) {
        UserModel.find({isValid: false}, function(err, results) {
            if (err) console.log(err);
            if (results === null)
                res.json("No users pending")
            else{
                console.log(results);
                res.json(results);
            }
        });
    }
}

module.exports = UserController;