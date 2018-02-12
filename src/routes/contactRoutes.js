var express = require('express');
var contactRouter = express.Router();
const pool = require('../db/dbFactory');

var Log = require('Log');
log = new Log('info');


var routes = function(nav) {

  contactRouter.route('/').get(function (req, res) {


    pool.query('SELECT * FROM Books ORDER BY id ASC', function(err, val) {
      if(err) {
        return console.error('error running query', err);
      }

      console.log('Result Set is :', val.rows);

      res.render('contactus', {
        title : "Register Paient",
        books : val.rows,
        nav : nav
      });
    });

   });

  contactRouter.route('/:oid').get(function (req, res) {/*

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


  contactRouter.route('/save').post(function (req, res) {/*

    //TODO : to get values from the client.

    pool.query('INSERT INTO paientregistration(paientid, fname, mnane, lname, created_on, last_login) values($1, $2, $3, $4, $5, $6)', [1,'J','R','P',null,null] , function(err, resultSet) {
      if(err) {
        return console.error('error running query', err);
      }

      console.log('Data Saved in DB', resultSet);

    });

  */});


  return contactRouter;
};

module.exports = routes;

