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
    },
    insert: function (req, res) {
        employerInformation.insert(req.body, res.send);        
    }
};


module.exports = EmployerManagement;
