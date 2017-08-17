const app = require('..\\app.js');

app.listen(process.env.PORT || 80, function() {
    const date = new Date();
    console.log('Started PayPer server at ' + date.toLocaleTimeString() + ' on ' + date.toDateString());
});