const router = require('express').router();
//const repository = require('../repository/EmpresaRepository');
const Empresa = require('../models/Empresa');

router.get('/lista', async (req, res) => {
    let empresa = await repo.getRegistros();

    res.render('empresa/lista', { lista: empresa });
})

router.get('/novo', (req, res) => {
    res.render('empresa/novo');
})

router.post('/salvar', (req, res) => {
    repo.salvar(new Empresa(
        req.body.id || new Date().getTime(),
        req.body.nome
    ), res.redirect('/empresa/lista'));
})

module.exports = router;