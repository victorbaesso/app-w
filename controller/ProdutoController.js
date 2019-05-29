const router = require('express').Router();
//const repo = require('../model/Produto');
const Produto = require('../model/Produto')

router.get('/lista', async (req, res) => {
  //  let produtos = await repo.getTodosRegistros();
let produtos = []; 
   res.render('produto/lista', { lista: produtos });
})

router.get('/novo', (req, res) => {
    res.render('produto/novo');
})

//router.post('/salvar', (req, res) => {
  //  repo.salvar(new Produto(
    //    req.body.id || new Date().getTime(),
      //  req.body.nome,
        
    //), res.redirect('/produto/lista'));
//})

module.exports = router;