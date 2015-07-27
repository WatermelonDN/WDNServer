loginInformation = require('../DBManagement/LoginInformation');

var LoginController = {
    newId: function (callback) {
        loginInformation.count(function (count) {
            var id = count + 1;
            callback(id);
        });
    },
    userExists: function (req, res) {
        loginInformation.userExists(req.params.userName.toLowerCase(), function (exists) {
            if (!exists) {
                res.jsonp({ result: false });
            }
            else {
                res.jsonp({ result: true });
            }
        });
    },
    checkUser: function (req, res) {
        loginInformation.checkUser(req.body, function (user) {
            res.jsonp(user);
        });
    },
    getUser: function (req, res) {
        loginInformation.getUser(parseInt(req.params.userID), function(user){
            res.jsonp(user);
        });
    },
    insert: function (req, res) {
        module.exports.newId(function (id) {
            req.body.userID = id;
            loginInformation.insert(req.body, function (user) {
                res.jsonp(user);
            });
        });
    }
};


module.exports = LoginController;
