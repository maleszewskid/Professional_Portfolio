var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var path = require('path');



app.use("/puclic",express.static("puclic"));
app.use(express.static("public"));
app.use(express.static(path.join('public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/contactController.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
