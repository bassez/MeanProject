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
            res.send("Error in body");
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
            user.save();

            res.send("User created");
        }
    }

    static read (req, res, next) {
        if(req.params.id === undefined){
            res.send("Missing id param");
        }else {
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
    }

    static update (req, res, next) {
        if(req.params.id === undefined){
            res.send("Missing id param");
        }else {

            if(req.body.pass)
                req.body.pass = ""+Crypto.SHA1(req.body.pass);

            UserModel.findByIdAndUpdate(req.params.id, req.body, function (err, results) {
                if (err) console.log(err);

                if (results === null)
                    console.log("No such user")
                else
                    console.log(results);
            });
            res.send("update");
        }
    }

    static delete (req, res, next) {
        if(req.params.id === undefined){
            res.send("Missing id param");
        }else {
            UserModel.findOneAndRemove(req.params.id, function (err, results) {
                if(err) console.log("Error findOneAndRemove function : ", err);

                if(results === null)
                    console.log("No such user")
                else
                    console.log(results);
            });
            res.send("Delete");
        }
    }

    static validate (req, res, next) {
        if(req.params.id === undefined){
            res.send("Missing id param");
        }else {
            UserModel.findByIdAndUpdate(req.params.id, {isValid: true}, function (err, results) {
                if (err) console.log(err);

                if (results === null)
                    console.log("No such user")
                else
                    console.log(results);
            });
            res.send("Validate");
        }
    }

    static readAll (req, res, next) {
            UserModel.find(function (err, results) {
                if (err) console.log(err);
                if (results === null)
                    console.log("No users in database")
                else{
                    console.log(results);
                    res.send(results);
                }
            });
    }
}

module.exports = UserController;