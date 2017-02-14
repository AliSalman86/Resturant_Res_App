// =============
// Dependencies:
// Series of npm packages that we will use to give our server useful functionality
// =============
var express = require("express");
var bodyParser = require("body-parser");

// =================================================
// Configuering express server and port:
// This will define basic properties for our server
// =================================================

var app = express();
// define the initial port
var PORT = process.env.PORT || 3000;

// define the use of body-parser, it helps the server to interpret the data snt to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =======================================================================================================
// Router
// below links point our server to a series of routing files
// these routes provide a map to our server to show it how ro response when a user visit or make a request
// for various urls
// =======================================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ===========================================
// Listener: it effectively starts the server:
// ===========================================
app.listen(PORT, function() {
    console.log("Server is listening on: " + PORT);
});