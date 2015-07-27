var client = require('./MongoDB');
var db;
client.connect(function (err, mongoClient) {
    if (err) console.log(err);
    db = mongoClient.db("wdn");
});

var LoginInformation = {
    count: function (callback) {
        db.collection('User', { strict: true }, function (err, collection) {
            if (err) console.log(err);
            collection.count(function (err, result) {
                callback(result);
            });
        });
    },
    userExists: function (userName, callback) {
        db.collection('User', { strict: true }, function (err, collection) {
            collection.findOne({ userName: userName }, function (err, result) {
                var exists;
                if (result == null) {
                    exists = false;
                }
                else {
                    exists = true;
                }
                callback(exists);
            });
        });
    },
    checkUser: function (login, callback) {
        db.collection('User', { strict: true }, function (err, collection) {
            collection.findOne({ userName: login.userName, password: login.password }, { userID: 1, userName: 1, _id: 0, type: 1 }, function (err, result) {
                callback(result);
            });
        });
    },
    getUser: function (userID, callback) {
        db.collection('User', { strict: true }, function (err, collection) {
            collection.findOne({ userID: userID }, { userID: 1, userName: 1, _id: 0, type: 1 }, function (err, result) {
                callback(result);
            });
        });
    },
    insert: function (user, callback) {
        db.collection('User', { strict: true }, function (err, collection) {
            if (err) console.log(err);
            collection.insert(user, { safe: true }, function (err, result) {
                callback(user);
            });
        });
    }
};

module.exports = LoginInformation;