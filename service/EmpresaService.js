const Empresa = require('../model/Empresa.js');
const Repository = require('../repository/EmpresaRepository.js');
var listaempresas = [];

const salvar = function (salvarEmpresa) {
	var empresa = new Empresa(salvarEmpresa.id || null, salvarEmpresa.nome);
	Repository.salvar(empresa);
}

const listar = async function () {
	return await Repository.listar();
}

const excluir = (codigo) => {
	Repository.excluir(codigo);
}

const buscaPorId = async (codigo) => {
	return await Repository.findOne(codigo);
}

module.exports.salvar = salvar;
module.exports.listar = listar;
module.exports.excluir = excluir;
module.exports.buscaPorId = buscaPorId;