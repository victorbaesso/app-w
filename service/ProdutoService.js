const Produto = require('../model/Produto.js');
const repository = require('../repository/ProdutoRepository.js');


var produto = new Produto();
var listaProdutos = [];

const salvar = function (salvarProduto) {
	repository.salvar(salvarProduto);
}

const listar = function () {
	listaProdutos = repository.listar();

	return listaProdutos;
}

const excluir = (codigo) => {
	repository.excluir(codigo);
}

module.exports.salvar = salvar;

module.exports.listar = listar;

module.exports.excluir = excluir;