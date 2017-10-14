// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservationDB = [

];


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/viewreserve", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newName = req.body;
    newName.name = newName.name.replace(/\s+/g, "").toLowerCase();

    console.log(newName);

    characters.push(newName);

    res.json(newName);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

function serchReservation() {
    connection.query(`SELECT * FROM reservationDB`, (err, res) => {
        console.log(res);
        res.forEach((reservations) => {
            table.addRow(reservations.id, reservations.name, reservations.phone_number, reservations.number_of_people);
        })
    })
}


function addReservation() {
    connection.query(`INSERT INTO reservationDB "${this.name}", "${this.phone_number}", ${this.number_of_people}`);

}



var reserve = [];
var waitlist = [];