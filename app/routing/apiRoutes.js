//loads data

var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        for()
        var newPerson = req.body;


        //needs compatability logic
        // if () {
            //if the match score is equivalent to  certain score then the people will be a match
        // }
    })

}