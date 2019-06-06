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

	console.log("codigo empresa a ser buscado: " + registroToSave.empresa.id);
	console.log("codigo produto a ser buscado: " + registroToSave.produto.id);

	registro = new Registro(
		registroToSave.id || null, EmpresaService.buscaPorId(registroToSave.empresa.id),
		ProdutoService.buscaPorId(registroToSave.produto.id),
		registroToSave.data,
		registroToSave.valor
	);

	console.log("Registro a ser salvo --> Id: " + registro.id + ", Nome da empresa: " +
	 registro.empresa.nome + ", Nome do produto: " + registro.produto.nome + ", Valor: " + registro.valor
	 + ", Data: " + registro.data + ";");

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
	var listinha = [];
	listinha = await RegistroRepository.listar();
	console.log("---Lista Service---");
	console.log(listinha);
	return listinha;
}

module.exports.buscaPorId = buscaPorId;
module.exports.excluiPorId = excluiPorId;
module.exports.salvar = salvar;
module.exports.listar = listar;