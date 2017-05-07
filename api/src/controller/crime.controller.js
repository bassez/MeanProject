"use strict";
class CrimeController {

    static create (req, res, next) {
        console.log("hello");
        res.send("create");
    }
    static read (req, res, next) {
        console.log("hello");
        res.send("read");
    }

    static update (req, res, next) {
        console.log("hello");
        res.send("update");
    }

    static delete (req, res, next) {
        console.log("hello");
        res.send("delete");
    }

    static readAll (req, res, next) {
        console.log("hello");
        res.send("read");
    }
}

module.exports = CrimeController;