var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/views'));

/*
//views is directory for all template files 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(request, response) {
    response.render("pages/index")
});
*/

app.listen(3000);
