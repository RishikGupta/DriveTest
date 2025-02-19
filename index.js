const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express_session = require('express-session');

const signupUserPost = require('./controllers/signupUserPost');
const loginUserPost = require('./controllers/loginUserPost');
const g2FormPostController = require('./controllers/g2FormPost');
const gUpdateDetailsPostController = require('./controllers/gUpdateDetailsPost');
const examinerUserPostController = require('./controllers/examinerUserPost');
const getDashboardPageController = require('./controllers/getDashboard');
const getG2PageController = require('./controllers/getG2');
const getGPageController = require('./controllers/getG');
const getAppointmentController = require('./controllers/getAppointment');
const getExaminerController = require('./controllers/getExaminer');
const getLoginPageController = require('./controllers/getLogin');
const getLogoutController = require('./controllers/getLogout');

const validateUserLogin = require('./middlewares/validateLogin');
const validateDefaultUserForm = require('./middlewares/validateDefaultUserForm');
const validateG2Form = require('./middlewares/validateG2Form');
const validateAppointment = require('./middlewares/validateAppointment');
const validateGForm = require('./middlewares/validateGForm');
const validateExaminer = require('./middlewares/validateExaminer');

require('dotenv').config();
mongoose.connect(process.env.DB).then((db) => "Connected to MongoDB" + db);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express_session({
    secret: "rishik7619"
}))

app.post('/signupUser', signupUserPost);
app.post('/loginUser', validateUserLogin, loginUserPost);
app.post('/g2_page/submitForm', validateDefaultUserForm, g2FormPostController);
app.post('/g2_page', validateG2Form, getG2PageController)
app.post('/updateDetails', gUpdateDetailsPostController);
app.post('/g_page', validateGForm, getGPageController);
app.post('/appointment', validateAppointment, getAppointmentController);
app.post('/examinerUpdate', examinerUserPostController);

app.get('/dashboard', getDashboardPageController);
app.get('/g_page', validateGForm, getGPageController);
app.get('/g2_page', validateG2Form, getG2PageController);
app.get('/appointment', validateAppointment, getAppointmentController);
app.get('/examiner', validateExaminer, getExaminerController);
app.get('/login', getLoginPageController);
app.get('/', getLoginPageController);
app.get('/logout', getLogoutController);


app.listen(port, () => {
    console.log(`DriveTest Book app listening at http://localhost:${port}`);
})
console.log("Is everything working correctly");
