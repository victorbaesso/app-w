const router = require('express').Router();
const Empresa = require('../model/Empresa');
const Service = require('../service/EmpresaService.js');

router.get('/lista', async (req, res) => {
  res.render('Emp-lista', {
    listaEmpresas: await Service.listar()
  });
})

router.get('/novo', (req, res) => {
  res.render('Emp-novo', {
    empresa: new Empresa()
  });
})

router.post('/salvar', (req, res) => {
  Service.salvar(new Empresa(
    req.body.id || null,
    req.body.nome
  ));

  res.redirect('/empresa/lista');
})

router.get('/editar/:id', async (req, res) => {
  res.render('Emp-novo', {
    empresa: await Service.findOne(req.params.id)
  });
})

router.get('/excluir/:id', async (req, res) => {
  Service.excluir(req.params.id);
  res.redirect('/empresa/lista');
})

module.exports = router;
