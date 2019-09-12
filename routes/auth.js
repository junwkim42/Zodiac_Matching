var db = require("../models");

module.exports = function(app) {
    app.post("/auth", function(req, res){
        var username = request.body.username;
        var password = request.body.password;
        if (username && password) {
            db.User.find
        }
    });

    app.post("/join", function(req, res){

    });
}