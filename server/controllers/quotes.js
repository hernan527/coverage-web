// Login Controller
// ================
// Handles routing for logging into the pp

'use strict';

let express           = require('express'),
    QuotesController  = express.Router(),
    q                 = require('qclient');

QuotesController.route('/?')
  // GET /quotes/
  // -----------
  // Render quoting page
  .get(function(req, res, next) {
    res.render('quotes/index', {});
  })
  // POST /quotes/
  // ------------
  // Gets quotes
  .post(function(req, res, next) {
    res.json({status: 'Got quotes'});
  });

module.exports = QuotesController;
