var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservationDB = [

];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Restaurant!")
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/make", function(req, res) {
    // res.send("Welcome to the Restaurant!")
    res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/view", function(req, res) {
    // res.send("Welcome to the Restaurant!")
    res.sendFile(path.join(__dirname, "view.html"));
});

// Get all reservations
app.get("/view", function(req, res) {
    res.json(reservationDB);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:restaurantDB", function(req, res) {
    var chosen = req.params.reservationDB;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < reservationDB.length; i++) {
            if (chosen === reservationDB[i].routeName) {
                return res.json(reservationDB[i]);
            }
        }
        return res.json(false);
    }
    return res.json(reservationDB);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;

    console.log(newcharacter);

    // We then add the json the user sent to the character array
    characters.push(newcharacter);

    // We then display the JSON to the users
    res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});