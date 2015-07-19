employerInformation = require('../DBManagement/EmployerInformation');

var EmployerManagement = {
    userExists: function (req, res) {
        employerInformation.userExists(req.params.userName.toLowerCase(), function (exists) {
            if (!exists) {
                res.jsonp({ result: false });
            }
            else {
                res.jsonp({ result: true });
            }
        });
    }
};


module.exports = EmployerManagement;
