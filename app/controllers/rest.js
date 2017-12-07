'use strict'

var parser = require('../middleware/bodyparser.js');
var rp = require('request-promise');

module.exports = function(app) {

    // show the admin page
    app.get('/getChartData', parser, function(req, res) {
        var x_axis = [];
        var y_axis_open = [];
        var y_axis_close = []; 
        var options = {
            uri: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + req.query.symbol + '&apikey=' + app.props.avkey 
        };
        rp(options)
        .then(function(results){
           var rawdata = JSON.parse(results)["Time Series (Daily)"];
           for (var day in rawdata) {
               console.log(day);
               y_axis_open.push(rawdata[day]["1. open"]);
               y_axis_close.push(rawdata[day]["4. close"]);
               x_axis.push(day);
           }
           return res.status(200).send({
               ticker_symbol: req.query.symbol,
               x_axis: x_axis.reverse(),
               y_axis_open: y_axis_open.reverse(),
               y_axis_close: y_axis_close.reverse()
           });
        })
    });
}
