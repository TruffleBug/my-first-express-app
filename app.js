const express = require('express');
const app = express();
const path = require('node:path');
const userController = require('./controllers/userController');

// FOR STATIC ASSETS (LIKE CSS)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// ENABLES EJS AS VIEW ENGINE & SAYS APP SHOULD LOOK FOR TEMPLATES IN /VIEW SUBDIRECTORY
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// ROUTERS
const newRouter = require('./routes/newRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/new', newRouter);
app.use('/', indexRouter);

// ERROR MIDDLEWARE FUNCTION - HANDLES ALL ERRORS IN APP THAT COMES DOWN FROM OTHER MIDDLEWARE FUNCTIONS
// Every thrown error in app or prev middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

// LOCALHOST PORT TO DISPLAY APP
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}.`);
});