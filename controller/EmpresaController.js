const router = require('express').Router();
//const repository = require('../repository/EmpresaRepository');
const Empresa = require('../model/Empresa');
const service = require('../service/EmpresaService.js');

var empresa = new Empresa();

router.get('/lista', async (req, res) => {
  //  let empresa = await repo.getRegistros();
    let empresa =[];
    res.render('Emp-lista', { lista: empresa });
})

router.get('/novo', (req, res) => {
    res.render('Emp-novo');
})

const editar = (req, res) => {
	var idEmpresa = req.params.id;
	
	service.findOne(idEmpresa, function(erro, objeto){
		if (erro) {
			console.log(erro);
		}else{
			empresa = new Empresa(objeto.codigo, objeto.nome);
			res.render('Emp-lista', { lista: empresa});
		}
	});
}


// router.post('/salvar', (req, res) => {
//     repo.salvar(new Empresa(
//         req.body.id || new Date().getTime(),
//         req.body.nome
//     ), res.redirect('Emp-lista'));
// })

module.exports = router;

module.exports.editar = editar;