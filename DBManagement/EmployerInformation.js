var client = require('./MongoDB');
var db;
client.connect(function (err, mongoClient) {
    if (err) console.log(err);
    db = mongoClient.db("wdn");
    console.log('connected');
});

exports.userExists = function (userName, callback) {
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
};
exports.insert = function (req, res) {
    db.collection('User', { strict: true }, function (err, collection) {
        if (err) console.log(err);
        collection.insert(req.body, { safe: true }, function (err, result) {
            console.log(req.body);
            res.send(req.body);
        });
    });
};
