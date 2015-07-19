var express = require('express'),
employerInformation = require('../DBManagement/EmployerInformation'),
employerManagement = require('./EmployerManagement');
cors = require('cors'),
bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/SecurityFacade/:userName/userExists', employerManagement.userExists);
app.post('/SecurityFacade/insertUser', employerInformation.insert);

app.listen(3000);

console.log('Listening on port 3000...');