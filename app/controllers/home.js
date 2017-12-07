'use strict'

var parser = require('../middleware/bodyparser.js');

module.exports = function(app) {

    // show the admin page
    app.get('/',  function(req, res) {
        return res.render('chartapp.ejs');
    });
}
