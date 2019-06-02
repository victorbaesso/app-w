const Registro = require('../model/Registro.js');
const Empresa = require('../model/Empresa.js');
const Produto = require('../model/Produto.js');
const EmpresaService = require('../service/EmpresaService.js');
//const ProdutoService = require('../service/ProdutoService.js');
const Repository = require('../repository/RegistroRepository.js');

const findOne = async (codigo) => {
	return await Repository.findOne(codigo);
}

const excluir = (id) => {
	Repository.excluir(id);
}

const salvar = function(registroToSave) {

	console.log("codigo empresa a ser buscado: " + registroToSave.empresa.id);
	console.log("codigo produto a ser buscado: " + registroToSave.produto.id);

	registro = new Registro(
		registroToSave.id || null,
		EmpresaService.findOne(registroToSave.empresa.id),
		//registro.produto = ProdutoService.buscaPorId(registroToSave.produto.id),
		registroToSave.data,
		registroToSave.valor
	);

	console.log("Registro a ser salvo --> Id: " + registro.id + ", Nome da empresa: " +
	 registro.empresa.nome + ", Nome do produto: " + registro.produto.nome + ", Valor: " + registro.valor
	 + ", Data: " + registro.data + ";")
	Repository.salvar(registro);

}

const listar = async function () {
	return await Repository.listar();
}

module.exports.findOne = findOne;

module.exports.excluir = excluir;

module.exports.salvar = salvar;

module.exports.listar = listar;
