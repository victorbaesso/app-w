const Produto = require('../model/Produto.js');
const Repository = require('../repository/ProdutoRepository.js');

const salvar = function(salvarProduto) {
  Repository.salvar(salvarProduto);
}

const listar = async function() {
  return await Repository.listar();
}

const excluir = (codigo) => {
  Repository.excluir(codigo);
}

const findOne = async (codigo) => {
  return await Repository.findOne(codigo);
}

module.exports.salvar = salvar;

module.exports.findOne = findOne;

module.exports.listar = listar;

module.exports.excluir = excluir;
