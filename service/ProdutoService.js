const Produto = require('../model/Produto.js');
const repository = require('../repository/ProdutoRepository.js');


var produto = new Produto();
var listaProdutos = [];

const salvar = function (salvarProduto) {
	repository.salvar(salvarProduto);
}

const listar = async function () {
	return await repository.listar();
}

const excluir = (codigo) => {
	repository.excluir(codigo);
}

const buscaPorId = async (codigo) => {
	return await repository.findOne(codigo);
}


module.exports.salvar = salvar;

module.exports.buscaPorId = buscaPorId;

module.exports.listar = listar;

module.exports.excluir = excluir;