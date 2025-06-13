const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname, 'src')));

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'student-signin.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

app.get('/student-dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'student-dashboard.html'));
});


app.get('/comingsoon', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'comingsoon.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});
