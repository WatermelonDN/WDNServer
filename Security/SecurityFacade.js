loginController = require('./LoginController');

var SecurityFacade = {
    userExists: loginController.userExists,
    getUser: loginController.getUser,
    checkUser: loginController.checkUser,
    insert: loginController.insert
};


module.exports = SecurityFacade;
