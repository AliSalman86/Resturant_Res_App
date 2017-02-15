// The code below would link the routes to sort of data sources, to post and get data from

var tableData = require("../data/tableData");
var waitlistData = require("../data/waitinglistData");

// =======
// Routes:
// =======

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitlistData);
    });

    app.post("/api/tables", function(req, res) {
        if (tableData < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitlistData.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function(req, res) {
        tableData = [];
        waitlistData = [];

        console.log(tableData);
    });

};