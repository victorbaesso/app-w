const Empresa = require('../model/Empresa.js');

const repository = require('../repository/EmpresaRepository.js');

var listaempresas = [];

const salvar = function (salvarEmpresa) {

	var empresa = new Empresa(salvarEmpresa.id || null, salvarEmpresa.nome);
	repository.salvar(empresa);
}

const listar = async function () {
	listaempresas = await repository.listar();

	return listaempresas;
}

const excluir = (codigo) => {
	repository.excluir(codigo);
}

module.exports.salvar = salvar;

module.exports.listar = listar;

module.exports.excluir = excluir;
