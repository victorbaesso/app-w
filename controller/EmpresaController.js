const router = require('express').Router();
const Empresa = require('../model/Empresa');
const service = require('../service/EmpresaService.js');

router.get('/lista', async (req, res) => {
		res.render('Emp-lista', { listaEmpresas: service.listar()});
})

router.get('/novo', (req, res) => {
    res.render('Emp-novo');
})

router.post('/salvar', (req, res) => {
    service.salvar(new Empresa(
        req.body.id || null,
        req.body.nome
    ),
	 res.redirect('Emp-lista'));
 })

module.exports = router;