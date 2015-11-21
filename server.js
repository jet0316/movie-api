var express    = require('express');
var bodyParser = require('body-parser');
// var fs = require('fs');
// var mm = require('musicmetadata');
var app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

// var parser = mm(fs.createReadStream('atreyu.mp3'), function (err, metadata) {
//   if (err) throw err;
//   console.log(metadata);
// });

app.get('/', function(req, res){
	res.sendFile('index.html', { root : '/' })
});

port = 3000
app.listen(port, function(){
	console.log(port + " million dollars")
})