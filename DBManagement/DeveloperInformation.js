var client = require('./MongoDB');
var db;
client.connect(function (err, mongoClient) {
    if (err) console.log(err);
    db = mongoClient.db("wdn");
});

var DeveloperInformation = {
    getDeveloper: function (developerID, callback) {
        client.getCollection(db, 'User', function (collection) {
            collection.findOne({ userID: developerID, type: 'Developer' }, { password: 0, dob: 0, location: 0 }, function (err, result) {
                callback(result);
            });
        });
    }
};

module.exports = DeveloperInformation;