"use strict";
class AuthController {

    static mustBeAdmin (req, res, next) {
        console.log('mba');
        return next();
    }
    static mustBeConnected (req, res, next) {
        console.log('mbc');
        return next();
    }

    static unauthorized(res) {

    }
}

module.exports = AuthController;