var express = require('express');
var dailyStatusRouter = express.Router();

var Log = require('Log');
log = new Log('info');


var routes = function() {

  dailyStatusRouter.route('/').get(function (req, res) {
    log.info("This is from Daily Status");

      res.send("This is from Daily Status");

   });

  return dailyStatusRouter;
};

module.exports = routes;

