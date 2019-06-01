const Registro = require('../model/Registro.js');
const Empresa = require('../model/Empresa.js');
const Produto = require('../model/Produto.js');
const EmpresaService = require('../service/EmpresaService.js');
//const ProdutoService = require('../service/ProdutoService.js');
const Repository = require('../repository/RegistroRepository.js');

const buscaPorId = async (codigo) => {
	return await Repository.buscaPorId(codigo);
}

const excluiPorId = (id) => {
	Repository.excluiPorId(id);
}

const salvar = async function(registroToSave) {

	console.log("codigo empresa a ser buscado: " + registroToSave.empresa.id);
	console.log("codigo produto a ser buscado: " + registroToSave.produto.id);

	registro = new Registro(
		registro.id = registroToSave.id || null,
		registro.empresa = EmpresaService.buscaPorId(registroToSave.empresa.id),
		//registro.produto = ProdutoService.buscaPorId(registroToSave.produto.id),
		registro.data = registroToSave.data,
		registro.valor = registroToSave.valor
	);

	console.log("Registro a ser salvo --> Id: " + registro.id + ", Nome da empresa: " +
	 registro.empresa.nome + ", Nome do produto: " + registro.produto.nome + ", Valor: " + registro.valor
	 + ", Data: " + registro.data + ";")
	await save(registro);
}


async function save (registro){
	if (registro.id != null) {
		await Repository.alterar(registro);
	} else {
		registro.id = new Date().getTime();
		await Repository.inserir(registro);
	}
}

const listar = async function () {
	return await Repository.listar();
}

module.exports.buscaPorId = buscaPorId;

module.exports.excluiPorId = excluiPorId;

module.exports.salvar = salvar;

module.exports.listar = listar;