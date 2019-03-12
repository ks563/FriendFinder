//loads data

var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        console.log(friendsData);
        var newPerson = req.body;
        var bestChoice = 50;
        var currentChoice;
        var friendMath;
        for (var i = 0; i < friendsData.length; i++){
            for (var j = 0; j < newPerson.choices.length; j++){
                friendMath += Math.abs(friendsData[i].scores[j] - newPerson.choices[j]);
            }
            if (friendMath < bestChoice) {
                currentChoice = friendsData[i];
                bestChoice = friendMath;
                console.log(currentChoice);
            }
            friendMath = 0; 
        }
        
    })

}