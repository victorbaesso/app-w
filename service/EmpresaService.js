const Empresa = require('../model/Empresa.js');
const Repository = require('../repository/EmpresaRepository.js');
var listaempresas = [];

const salvar = function (salvarEmpresa) {

	var empresa = new Empresa(salvarEmpresa.id || null, salvarEmpresa.nome);
	repository.salvar(empresa);
}

const listar = async function () {
	listaempresas = await Repository.listar();
	return listaempresas;
}

const excluir = (codigo) => {
	repository.excluir(codigo);
}

module.exports.salvar = salvar;
module.exports.listar = listar;
module.exports.excluir = excluir;