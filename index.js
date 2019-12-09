const express = require('express');
const hbs = require('express-handlebars');
const app = express();

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
  }
  res.render('index.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'Accueil',
  }
  res.render('index.hbs', data);
});

app.get('/play', function (req, res) {
  let data = {
    title: 'Partie standart',
  }
  res.render('play.hbs', data);
});

app.get('/customPart', function (req, res) {
  let data = {
    title: 'Partie personnalisée',
  }
  res.render('customPart.hbs', data);
});

app.get('/*', function (req, res) {
  res.sendStatus(404);
})


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
