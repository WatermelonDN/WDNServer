var projectManagement = require('./ProjectManagement');
var SiteModelFacade = {
    newId: projectManagement.newId,
    insertProject: projectManagement.insert,
    getAllProjects: projectManagement.getAllProjects
};
module.exports = SiteModelFacade;