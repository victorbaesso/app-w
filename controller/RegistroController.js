const router = require('express').Router();

const Registro = require('../model/Registro');

const RegistroService = require('../service/RegistroService.js');
const EmpresaService = require('../service/EmpresaService.js');
const ProdutoService = require('../service/ProdutoService.js');

router.get('/lista', async (req, res) => {
    res.render('Reg-lista', { registros: await RegistroService.listar() });
})

router.get('/novo', async (req, res) => {
    res.render('Reg-Novo', {empresas: await EmpresaService.listar(), produtos: await ProdutoService.listar(), registro : new Registro()});
})

router.get('/editar/:id', async (req, res) => {
    res.render('Reg-Novo', { registro : await RegistroService.findOne(req.params.id), empresas: await EmpresaService.listar(), produtos: await ProdutoService.listar()});
})

router.get('/excluir/:id', async (req, res) => {
    RegistroService.excluir(req.params.id);
    res.redirect('/registro/lista');
})

router.post('/salvar', async (req, res) => {
  await RegistroService.salvar(new Registro(
        req.body.id || null,
        req.body.empresa,
        req.body.produto,
        new Date(req.body.data),
        req.body.valor
    ),
    res.redirect('/registro/lista'));
})

module.exports = router;
