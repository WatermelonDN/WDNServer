var express = require('express'),
employerManagement = require('./EmployerManagement'),
siteModelFacade = require('./SiteModelFacade');
cors = require('cors'),
bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/models'));

app.get('/Security/:userName/userExists', employerManagement.userExists);
app.post('/Security/insertUser', employerManagement.insert);

app.get('/Project/newId', siteModelFacade.newId);
app.post('/Project/insert', siteModelFacade.insertProject);


app.listen(3000);

console.log('Listening on port 3000...');