const router = require('express').Router();
const Service = require('../service/ProdutoService');
const Produto = require('../model/Produto')

router.get('/lista', async (req, res) => {
  console.log(await Service.listar());
  res.render('Prod-lista', {
    listaProdutos: await Service.listar()
  });
})

router.get('/novo', (req, res) => {
  res.render('Prod-novo', {
    produto: new Produto()
  });
})

router.post('/salvar', (req, res) => {
  Service.salvar(new Produto(
    req.body.id || null,
    req.body.nome
  ));
  res.redirect('/produto/lista');
})

router.get('/excluir/:id', (req, res) => {
  Service.excluir(req.params.id);
  res.redirect('/produto/lista');
})

router.get('/editar/:id', async (req, res) => {
  res.render('Prod-novo', {
    produto: await Service.findOne(req.params.id)
  });
})

module.exports = router;
