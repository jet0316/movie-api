var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
	res.sendFile('index.html', { root : '/' })
});

var port = 3000
app.listen(port, function(){
	console.log(port + " million dollars")
})