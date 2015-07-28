var client = require('./MongoDB');
var db;
client.connect(function (err, mongoClient) {
    if (err) console.log(err);
    db = mongoClient.db("wdn");
});

var getCollection = function (collectionCallback) {
    db.collection('Project', { strict: true }, function (err, collection) {
        if (err) console.log(err);
        collectionCallback(collection);
    });
};

var ProjectInformation = {
    count: function (callback) {
        db.collection('Project', { strict: true }, function (err, collection) {
            if (err) console.log(err);
            collection.count(function (err, result) {
                callback(result);
            });
        });
    },
    insert: function (project, callback) {
        db.collection('Project', { strict: true }, function (err, collection) {
            if (err) console.log(err);
            collection.insert(project, { safe: true }, function (err, result) {
                callback(project);
            });
        });
    },
    getAllProjects: function (callback) {
        getCollection(function (collection) {
            collection.find().toArray(function (err, items) {
                callback(items);
            });
        });
    },
    developersInterested: function (projectID, callback) {
        db.collection('Project', { strict: true }, function (err, collection) {
            if (err) console.log(err);
            collection.findOne({ projectID: projectID }, { developersInterested: 1 }, function (err, result) {
                callback(result);
            });
        });
    },
    getProject: function (projectID, callback) {
        getCollection(function (collection) {
            collection.findOne({ projectID: projectID }, function (err, result) {
                callback(result);
            });
        });
    },
    showInterest: function (projectID, developerIDs, callback) {
        db.collection('Project', { strict: true }, function (err, collection) {
            if (err) console.log(err);
            collection.update({ projectID: projectID }, { $set: { developersInterested: developerIDs } }, function (err, result) {
                callback(result);
            });
        });
    }
};

module.exports = ProjectInformation;