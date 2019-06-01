var express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");// pegar parametros do request

const loginService = require("./service/loginService");
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static('assets')); // arquivos sem controller

//app.use('/home', require('./controllers/HomeController'));

app.use('/produto', require('./controller/ProdutoController'));
app.use('/empresa', require('./controller/EmpresaController'));
app.use('/registro', require('./controller/RegistroController'));

app.get('/',(req, res)=>{
  res.render('login', {retorno: null});
})

app.get('/login',(req, res)=>{
  res.render('login', {retorno: null});
})

app.post('/login' , loginService.login);

app.get('/logout' , (req, res)=>{
    res.redirect('/login');
});

app.get('/home',(req, res)=>{
  res.render('home', {retorno: null});
})

app.listen(3000, ()=> console.log('Listening on localhost:3000'));