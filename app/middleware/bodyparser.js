var bodyParser = require('body-parser');
//app.use(bodyParser.json()); // get information from html forms
//app.use(bodyParser.urlencoded({ extended: true }));
module.exports = bodyParser.urlencoded({ extended: true })
