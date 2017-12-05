// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer(/*{dest: __dirname + '/uploads/'}*/);
app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




app.post("/size", upload.single('file'),function (req, res) {
  res.json({size: req.file.size});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
