developerInformation = require('../DBManagement/DeveloperInformation');

var DeveloperManagement = {
    getDeveloper: function (req, res) {
        var userID = parseInt(req.params.userID);
        developerInformation.getDeveloper(userID, function (developer) {
            res.jsonp(developer);
        });
    }    
};


module.exports = DeveloperManagement;
