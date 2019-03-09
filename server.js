//npm packackge that givers server specific functionality
var express = require("express");

// specifies express server
var app = express();


// sets up port for server to listen on 
var PORT = process.env.PORT || 8080;

//these lines handle data parsing so we can handle data in urls and json files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//links to our apiRoutes and htmlRoutes files and passes the express npm package to those files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//starts our server by having it listen to the port - an event
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });