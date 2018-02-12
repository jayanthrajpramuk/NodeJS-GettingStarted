var express = require('express');
var maintainRouter = express.Router();
const pool = require('../db/dbFactory');

var Log = require('Log');
log = new Log('info');


var routes = function(nav) {

  maintainRouter.route('/').get(function (req, res) {

      res.render('maintain', {
        title : "Maintain Application",
        nav : nav
      });

   });

  maintainRouter.route('/:oid').get(function (req, res) {/*

    var oid = req.params.oid;

    pool.query('SELECT * FROM Books  WHERE id=($1)', [oid] , function(err, resultSet) {
      if(err) {
        return console.error('error running query', err);
      }

      console.log('Result Set is :', resultSet.rows);

      res.render('book', {
        title : "Paient Details",
        book : resultSet.rows[0],
        nav : nav
      });
    });

  */});


  maintainRouter.route('/save').post(function (req, res) {/*

    //TODO : to get values from the client.

    pool.query('INSERT INTO paientregistration(paientid, fname, mnane, lname, created_on, last_login) values($1, $2, $3, $4, $5, $6)', [1,'J','R','P',null,null] , function(err, resultSet) {
      if(err) {
        return console.error('error running query', err);
      }

      console.log('Data Saved in DB', resultSet);

    });

  */});


  return maintainRouter;
};

module.exports = routes;

