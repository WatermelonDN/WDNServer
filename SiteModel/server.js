var express = require('express'),
securityFacade = require('../Security/SecurityFacade'),
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

app.get('/Security/:userName/userExists', securityFacade.userExists);
app.get('/Security/user/:userID', securityFacade.getUser);
app.post('/Security/insertUser', securityFacade.insert);

app.get('/Project/All', siteModelFacade.getAllProjects);
app.post('/Project/insert', siteModelFacade.insertProject);


app.listen(3000);

console.log('Listening on port 3000...');