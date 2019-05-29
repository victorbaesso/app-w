const Empresa = require('../models/Empresa.js');

// falta ver como everson fez no repositories
const repository = require('../repositories/empresaRepository.js');

var empresa = new Empresa();
var listaempresas = [];

const salvar = function (salvarEmpresa) {

	empresa.nome = salvarEmpresa.nome;

	if (salvarEmpresa.codigo) {
		// alterou
		empresa.codigo = salvarEmpresa.codigo;
		repository.alterar(empresa);
	} else {
		empresa.codigo = new Date().getTime();
		empresa._id = new ObjectID();
		//salvou
		repository.inserir(empresa);
	}
}

const listar = function () {
	listaempresas = repository.listar();

	return listaempresas;
}

const excluir = (codigo) => {
	repository.excluir(codigo);
}

module.exports.salvar = salvar;

module.exports.listar = listar;

module.exports.excluir = excluir;
