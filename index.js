const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const db = require('./server/db')
const connection = require('./server/db.js');
const passport = require('passport');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({ secret: 'keyboard cat',resave:true,saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./server/users'));
app.use('/', require('./server/p4'));
app.use('/', require('./server/passport'));
const path = require('path')
const PORT = process.env.PORT || 5000



app.use(express.static('public'));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');

app.get('', function (req, res) {
  let data = {
    title: 'Accueil',
    user:req.user,
  }
  res.render('index.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'Accueil',
    user:req.user,
  }
  res.render('index.hbs', data);
});

app.get('/logIn', function (req, res) {
  let data = {
    title: 'Connexion',
    user:req.user,
  }
  res.render('logIn.hbs', data);
});

app.get('/signIn', function (req, res) {
  let data = {
    title: 'Connexion',
    user:req.user,
  }
  res.render('signIn.hbs', data);
});

app.get('/play', function (req, res) {
  let data = {
    title: 'Partie standart',
    user:req.user,
  }
  res.render('play.hbs', data);
});

app.get('/customPart', function (req, res) {
  let data = {
    title: 'Partie personnalisée',
    user:req.user,
  }
  res.render('customPart.hbs', data);
});

app.get('/playVsIA', function (req, res) {
  let data = {
    title: 'Partie contre IA',
    user:req.user,
  }
  res.render('playVsIA.hbs', data);
});

app.get('/confirmedRegistration', function (req, res) {
  let data = {
    title: 'Nouvelle inscription',
    user:req.user,
  }
  res.render('confirmedRegistration.hbs', data);
});

app.get('/*', function (req, res) {
  res.sendStatus(404);
})


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
