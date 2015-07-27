var SiteModel = null;
var Security = {
    Login: function () {
        this.userID = 0;
        this.userName = '';
        this.password = '';
    }
};
(function () {
    var User = function () {
        this.userID = 0;
        this.userName = '';
        this.type = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.dob = '';
        this.location = '';
    };
    var Employer = function () {
        this.company = '';
    }
    Employer.prototype = Object.create(User.prototype);
    var Developer = function () {

    };
    Developer.prototype = Object.create(User.prototype);
    SiteModel = {
        Project: function () {
            this.projectID = 0;
            this.employerID = 0;
            this.projectName = '';
            this.projectDescription = '';
            this.teamID = 0;
            this.category = [];
            this.status = '';
            this.price = 0.00;
            this.developersInterested = [];
        },
        Employer: Employer,
        Developer: Developer
    };
}());