const router = require('express').Router();
const service= require('../service/ProdutoService');
const Produto = require('../model/Produto')

router.get('/lista', async (req, res) => {
   var lista = await service.listar();
    res.render('Prod-lista', { listaProdutos: lista});
})

router.get('/novo', (req, res) => {
    res.render('Prod-novo');
})

router.post('/salvar', (req, res) => {
    service.salvar(new Produto(
        req.body.id || null,
        req.body.nome
    ));
    res.redirect('/produto/lista');
 })

module.exports = router;