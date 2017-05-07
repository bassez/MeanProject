"use strict";
class UserController {

    static create (req, res, next) {
        //DONT FORGET TO SHA1 HIS PASSWORD
        console.log("hello");
        res.send("create");
    }
    static read (req, res, next) {
        console.log("hello");
        res.send("read");
    }

    static update (req, res, next) {
        //DONT FORGET TO SHA1 HIS PASSWORD
        console.log("hello");
        res.send("update");
    }

    static delete (req, res, next) {
        console.log("hello");
        res.send("delete");
    }

    static validate (req, res, next) {
        console.log("hello");
        res.send("validate");
    }

    static readAll (req, res, next) {
        console.log("hello");
        res.send("read");
    }
}

module.exports = UserController;