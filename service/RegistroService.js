const Registro = require('../model/Registro.js');
const Empresa = require('../model/Empresa.js');
const Produto = require('../model/Produto.js');

const EmpresaService = require('../service/EmpresaService.js');
const ProdutoService = require('../service/ProdutoService.js');
const RegistroRepository = require('../repository/RegistroRepository.js');

const findOne = async (id) => {
	return await RegistroRepository.findOne(id);
}

const excluir = (id) => {
	RegistroRepository.excluir(id);
}

const salvar = async function(registroToSave) {
	registro = new Registro(
		registroToSave.id || null,
		await EmpresaService.findOne(registroToSave.empresa),
		await ProdutoService.findOne(registroToSave.produto),
		registroToSave.data,
		registroToSave.valor
	);
	RegistroRepository.salvar(registro);
}

const listar = async function () {
	return await RegistroRepository.listar();
}

module.exports.findOne = findOne;
module.exports.excluir = excluir;
module.exports.salvar = salvar;
module.exports.listar = listar;
