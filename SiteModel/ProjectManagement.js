projectInformation = require('../DBManagement/ProjectInformation');

var ProjectManagement = {
    newId: function (callback) {
        projectInformation.count(function (count) {
            callback(count + 1);
        });
    },
    insert: function (req, res) {
        module.exports.newId(function (id) {
            req.body.projectID = id;
            req.body.status = 'New';
            projectInformation.insert(req.body, function (project) {
                res.send(project);
            });
        });
    },
    getAllProjects: function (req, res) {
        projectInformation.getAllProjects(function (projects) {
            res.send(projects);
        });
    },
    showInterest: function (req, res) {
        var projectID = parseInt(req.params.projectID);
        projectInformation.developersInterested(projectID, function (project) {
            var developerIDs = [];
            for (var i in project.developersInterested) {
                developerIDs.push(parseInt(project.developersInterested[i]));
            }
            for (var i in req.body) {
                var found = false;
                for (var x in developerIDs) {
                    if (parseInt(req.body[i]) == developerIDs[x]) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    developerIDs.push(parseInt(req.body[i]));
                }
            }
            projectInformation.showInterest(projectID, developerIDs, function (result) {
                console.log(result);
                res.send(result);
            });
        });
    }
};


module.exports = ProjectManagement;
