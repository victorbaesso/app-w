const router = require('express').Router();
const service= require('../service/ProdutoService');
const Produto = require('../model/Produto')

router.get('/lista', async (req, res) => {
	console.log(await service.listar());
	res.render('Prod-lista', {listaProdutos : await service.listar()});
})

router.get('/novo', (req, res) => {
    res.render('Prod-novo', {produto: new Produto()});
})

router.post('/salvar', (req, res) => {
    service.salvar(new Produto(
        req.body.id || null,
        req.body.nome
    ));
    res.redirect('/produto/lista');
 })

router.get('/excluir/:id', (req, res) => {
    service.excluir(req.params.id);
    res.redirect('/produto/lista');
})

router.get('/editar/:id', async (req, res) => {
    res.render('Prod-novo', { produto: await service.buscaPorId(req.params.id)});
})

module.exports = router;