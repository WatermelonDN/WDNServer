var projectManagement = require('./ProjectManagement'),
    developerManagement = require('./DeveloperManagement');
var SiteModelFacade = {
    newId: projectManagement.newId,
    insertProject: projectManagement.insert,
    getAllProjects: projectManagement.getAllProjects,
    getProject: projectManagement.getProject,
    showInterest: projectManagement.showInterest,
    getDeveloper: developerManagement.getDeveloper
};
module.exports = SiteModelFacade;