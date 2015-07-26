var projectManagement = require('./ProjectManagement');
var SiteModelFacade = {
    newId: projectManagement.newId,
    insertProject: projectManagement.insert
};
module.exports = SiteModelFacade;