loginController = require('./LoginController');

var SecurityFacade = {
    userExists: loginController.userExists,
    getUser: loginController.getUser,
    insert: loginController.insert
};


module.exports = SecurityFacade;
