var client = require('./MongoDB');
var db;
client.connect(function (err, mongoClient) {
    if (err) console.log(err);
    db = mongoClient.db("wdn");
});

exports.count = function (callback) {
    db.collection('Project', { strict: true }, function (err, collection) {
        if (err) console.log(err);
        collection.count(function (err, result) {
            callback(result);
        });
    });
};

exports.insert = function (project, callback) {
    db.collection('Project', { strict: true }, function (err, collection) {
        if (err) console.log(err);
        collection.insert(project, { safe: true }, function (err, result) {
            callback(project);
        });
    });
};

exports.getAllProjects = function (callback) {
    db.collection('Project', { strict: true }, function (err, collection) {
        if (err) console.log(err);
        collection.find().toArray(function (err, items) {
            callback(items);
        });
    });
};