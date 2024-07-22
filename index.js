const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express_session = require('express-session');


const signupUserPost = require('./controllers/signupUserPost');
const loginUserPost = require('./controllers/loginUserPost');
const g2FormPostController = require('./controllers/g2FormPost');
const gUpdateDetailsPostController = require('./controllers/gUpdateDetailsPost');
const getG2PageController = require('./controllers/getG2');
const getGPageController = require('./controllers/getG');
const getDashboardPageController = require('./controllers/getDashboard');
const getLoginPageController = require('./controllers/getLogin');
const getLogoutController = require('./controllers/getLogout');

const validateSignup = require('./middlewares/validateSignup');
const validateUserLogin = require('./middlewares/validateLogin');
const validateForm = require('./middlewares/validateMiddleware');

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

app.post('/signupUser',validateSignup, signupUserPost);
app.post('/loginUser',validateUserLogin, loginUserPost);
app.post('/g2_page/submitForm',validateForm, g2FormPostController);
app.post('/updateDetails', gUpdateDetailsPostController);

app.get('/g_page', getGPageController);
app.get('/g2_page', getG2PageController );
app.get('/dashboard', getDashboardPageController );
app.get('/login', getLoginPageController );
app.get('/', getLoginPageController);
app.get('/logout', getLogoutController);


app.listen(port, () => {
    console.log(`DriveTest Book app listening at http://localhost:${port}`);
})