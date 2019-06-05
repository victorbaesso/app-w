const router = require('express').Router();

const Registro = require('../model/Registro');

const RegistroService = require('../service/RegistroService.js');
const EmpresaService = require('../service/EmpresaService.js');
const ProdutoService = require('../service/ProdutoService.js');

router.get('/lista', async (req, res) => {
    res.render('Reg-lista', { registros: await RegistroService.listar() });
})

router.get('/novo', async (req, res) => {
    res.render('Reg-Novo', {empresas: await EmpresaService.listar(), produtos: await ProdutoService.listar()});
})

router.post('/salvar', async (req, res) => {
    await RegistroService.salvar(new Registro(
        req.body.id || null,
        req.body.empresa,
        req.body.produto,
        req.body.data,
        req.body.valor
    ), 
    res.redirect('/Reg-lista'));
})

module.exports = router;