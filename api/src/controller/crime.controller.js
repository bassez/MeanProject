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
            res.status(404).json("Error in body");
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
            crime.save().then((e)=>{console.log(e)}, (e)=>{console.log(e)});
            res.json("Crime registered");
        }
    }
    static read (req, res, next) {
            CrimeModel.findById(req.params.id, function (err, results) {
                if (err) console.log(err);
                if (results === null)
                    res.status(404).json("No such crime");
                else{
                    console.log(results);
                    res.json(results);
                }
            });
    }

    static update (req, res, next) {
            CrimeModel.findByIdAndUpdate(req.params.id, req.body, function (err, results) {
                if (err) console.log(err);

                if (results === null)
                    res.status(404).json("No such crime");
                else
                    console.log(results);
            });
            res.json("Updated");
    }

    static delete (req, res, next) {
            CrimeModel.findOneAndRemove(req.params.id, function (err, results) {
                if(err) console.log("Error findOneAndRemove function : ", err);

                if(results === null)
                    console.log("No such crime")
                else
                    console.log(results);
            });
            res.json("Deleted");
    }

    static readAll (req, res, next) {
        CrimeModel.find(function (err, results) {
            if (err) console.log(err);
            if (results === null)
                res.json("No crimes registered");
            else{
                res.json(results);
            }
        });
    }

    static search (req, res, next) {
        let search = {};
            let crimeFilters = { $or: [
                {compnos: req.body.compnos},
                {naturecode: req.body.naturecode},
                {incident_type_description: req.body.incident_type_description},
                {main_crimecode: req.body.main_crimecode},
                {reptdistrict: req.body.reptdistrict},
                {reportingarea: req.body.reportingarea},
                {fromdate: req.body.fromdate},
                {weapontype: req.body.weapontype},
                {shooting: req.body.shooting},
                {domestic: req.body.domestic},
                {shift: req.body.shift},
                {year: req.body.year},
                {month: req.body.month},
                {day_week: req.body.day_week},
                {ucrpart: req.body.ucrpart},
                {x: req.body.x},
                {y: req.body.y},
                {streetname: req.body.streetname},
                {xstreetname: req.body.xstreetname},
                {location: req.body.location}
            ]};
            CrimeModel.find(crimeFilters, function (err, results) {
                console.log(results)
                if (err) console.log(err);
                if (results === null)
                    res.json("No crimes registered");
                else{
                    res.json(results);
                }
            });

    }
}

module.exports = CrimeController;