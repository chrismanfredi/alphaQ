// var fs = require('fs');

var express = require('express'),
app = express(), 
exphbs  = require('express-handlebars'), mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

// fs.readdirSync(__dirname + '/application').forEach(function (file) {
//     if (~file.indexOf('.js')) require(__dirname + '/application/' + file);
// });

var peopleSchema = mongoose.Schema({
  _id: String,
    name: String
});


//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
 
//config vars

//environmental port 
var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
  // renders home page  
  res.render('home');
})
 
app.listen(port);
console.log("server active on port:", port);
