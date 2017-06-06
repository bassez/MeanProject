"use strict";
const auth    = require('basic-auth');
const CrimeShema = require('../models/crime.model');
const mongoose = require('mongoose');

const CrimeModel = mongoose.model('Crime', CrimeShema);
// mongoose.connect('mongodb://localhost:27017/meanProject');
//todo RES>JSON
class CrimeController {

    static create (req, res, next) {
        if(Object.keys(req.body).length === 0 || Object.keys(req.body).length !== 20){
            res.send("Error in body");
        }
        else {

            let crime = new CrimeModel({
                compnos: req.body.compnos,
                naturecode: req.body.naturecode,
                incident_type_description: req.body.incident_type_description,
                main_crimecode: req.body.main_crimecode,
                reptdistrict: req.body.reptdistrict,
                reportingarea: req.body.reportingarea,
                fromdate: req.body.fromdate,
                weapontype: req.body.weapontype,
                shooting: req.body.shooting,
                domestic: req.body.domestic,
                shift: req.body.shift,
                year: req.body.year,
                month: req.body.month,
                day_week: req.body.day_week,
                ucrpart: req.body.ucrpart,
                x: req.body.x,
                y: req.body.y,
                streetname: req.body.streetname,
                xstreetname: req.body.xstreetname,
                location: req.body.location
            });
            crime.save();
            res.send("Crime registered");
        }
    }
    static read (req, res, next) {
        if(req.params.id === undefined){
            res.send("Missing id param");
        }else {

            CrimeModel.findById(req.params.id, function (err, results) {
                if (err) console.log(err);
                if (results === null)
                    console.log("No such crime")
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

            CrimeModel.findByIdAndUpdate(req.params.id, req.body, function (err, results) {
                if (err) console.log(err);

                if (results === null)
                    console.log("No such crime")
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
            CrimeModel.findOneAndRemove(req.params.id, function (err, results) {
                if(err) console.log("Error findOneAndRemove function : ", err);

                if(results === null)
                    console.log("No such crime")
                else
                    console.log(results);
            });
            res.send("Deleted");
        }
    }

    static readAll (req, res, next) {
        CrimeModel.find(function (err, results) {
            if (err) console.log(err);
            if (results === null)
                console.log("No crimes registered")
            else{
                res.send(results);
            }
        });
    }
}

module.exports = CrimeController;