const Registro = require('../model/Registro.js');
const Empresa = require('../model/Empresa.js');
const Produto = require('../model/Produto.js');

const EmpresaService = require('../service/EmpresaService.js');
const ProdutoService = require('../service/ProdutoService.js');
const RegistroRepository = require('../repository/RegistroRepository.js');

const buscaPorId = async (id) => {
	return await RegistroRepository.buscaPorId(id);
}

const excluiPorId = (id) => {
	RegistroRepository.excluiPorId(id);
}

const salvar = async function(registroToSave) {
	registro = new Registro(
		registroToSave.id || null, await EmpresaService.buscaPorId(registroToSave.empresa),
		await ProdutoService.buscaPorId(registroToSave.produto),
		registroToSave.data,
		registroToSave.valor
	);
	await save(registro);
}

async function save (registro){
	if (registro.id != null) {
		await RegistroRepository.alterar(registro);
	} else {
		registro.id = new Date().getTime();
		await RegistroRepository.inserir(registro);
	}
}

const listar = async function () {
	return await RegistroRepository.listar();
}

module.exports.buscaPorId = buscaPorId;
module.exports.excluiPorId = excluiPorId;
module.exports.salvar = salvar;
module.exports.listar = listar;