

var UsuariosCadastrados = [];

function init(){
  UsuariosCadastrados.push({user:"victor", senha:"666"});
  UsuariosCadastrados.push({user:"vitao", senha:"vitao"});
  UsuariosCadastrados.push({user:"lucas", senha:"lucas"});
  UsuariosCadastrados.push({user:"mateus", senha:"mateus"});
  UsuariosCadastrados.push({user:"everson", senha:"everson"});
  UsuariosCadastrados.push({user:"luiz", senha:"luiz"});
}

const login = (req, res)=> {
  init();
  var user = req.body.user;
  var senha = req.body.senha;

    if (canLogin(user, senha)) {
      res.redirect('/home');
    }else{
      res.render('login', {retorno: "Email ou Senha inválidos."});
    }
}

function canLogin(user, senha){
  let usuarios = UsuariosCadastrados.filter(function(val) {
	 return val.user == user && val.senha == senha;
  });

  if (usuarios.length == 0) {
    return false;
  } else {
    console.log("logado como: " + usuarios[0].user);
    return true;
  }
}

module.exports.login = login;
