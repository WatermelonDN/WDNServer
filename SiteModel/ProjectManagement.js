projectInformation = require('../DBManagement/ProjectInformation');

var ProjectManagement = {
    newId: function (req, res) {
        projectInformation.count(function (count) {
            res.jsonp({ newId: count + 1 });
        });
    },
    insert: function (req, res) {
        req.body.status = 'New';
        projectInformation.insert(req.body, function (project) {
            res.send(project);
        });
    }
};


module.exports = ProjectManagement;
