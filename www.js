const express = require('express'), app = express(), index = express.Router();

index.get('/', function(req, res) {
    res.sendFile('public_files/index.html', {root: __dirname});
});
index.get('*', function(req, res) {
    res.sendFile('public_files/' + req.params[0], {root: __dirname})
});

app.use(index);

app.listen(process.env.PORT || 80);