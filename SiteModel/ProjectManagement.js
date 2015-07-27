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
    }
};


module.exports = ProjectManagement;
