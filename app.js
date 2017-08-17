/**
 * Created by Aanand Kainth on August 8. 2017 for PayPer
 */
const express = require('express'), app = express();

app.get('/', function(request, response) {
    response.sendFile('/public/index.html', {root: __dirname});
});

module.exports = app;
