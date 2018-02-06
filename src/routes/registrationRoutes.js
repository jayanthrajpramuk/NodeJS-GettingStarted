var express = require('express');
var registrationRouter = express.Router();
const pool = require('../db/dbFactory');

var Log = require('Log');
log = new Log('info');


var routes = function(nav) {

  registrationRouter.route('/').get(function (req, res) {


    pool.query('SELECT * FROM Books ORDER BY id ASC', function(err, val) {
      if(err) {
        return console.error('error running query', err);
      }

      console.log('Result Set is :', val.rows);

      res.render('books', {
        title : "Register Paient",
        books : val.rows,
        nav : nav
      });
    });

   });

  registrationRouter.route('/:oid').get(function (req, res) {

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

  });

  return registrationRouter;
};

module.exports = routes;

