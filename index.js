var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

port = process.env.PORT || 8000;

/*
//views is directory for all template files 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(request, response) {
    response.render("pages/index")
});
*/

app.listen(port);
