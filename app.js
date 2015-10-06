var express = require('express'),
app = express(), 
exphbs  = require('express-handlebars');


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

