const router = require('express').Router();
const service = require('../service/RegistroService');
const Registro = require('../model/Registro');


router.get('/lista', async (req, res) => {
    res.render('Reg-lista', { registros: await service.listar() });
})

router.get('/novo', (req, res) => {
    res.render('Reg-novo');
})

router.post('/salvar', async (req, res) => {
    await service.salvar(new Registro(
        req.body.id || null,
        req.body.empresa,
        req.body.produto,
        req.body.data,
        req.body.valor
    ), 
    res.redirect('/Reg-lista'));
})

module.exports = router;