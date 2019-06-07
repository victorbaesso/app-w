const db = require('./DBConnection');

const salvar = function(produto) {
  if (produto.id != null) {
    alterar(produto);
  } else {
    produto.id = new Date().getTime();
    inserir(produto);
  }
}

const excluir = function(id) {
  db.getDB().collection('produtos').deleteOne({
    "id": parseInt(id)
  }, (erro, result) => {
    erro ? console.log(erro) : console.log("Produto excluido com sucesso.");
  });
}

function inserir(produto) {
  db.getDB().collection('produtos').insertOne(produto, (erro, result) => {
    erro ? console.log(erro) : console.log("Produto salvo com sucesso.");
  });
}

function alterar(produto) {
  db.getDB().collection('produtos').updateOne({
    "id": parseInt(produto.id)
  }, {
    $set: {
      "nome": produto.nome
    }
  }, (erro, res) => {
    erro ? console.log(erro) : console.log("Produto alterado com Sucesso.");
  });
}

const listar = async function() {
  return await db.getDB().collection('produtos').find().toArray();
}

const findOne = async function(id) {
  return await db.getDB().collection('produtos').findOne({
    "id": parseInt(id)
  });
}

module.exports.findOne = findOne;
module.exports.excluir = excluir;
module.exports.salvar = salvar;
module.exports.listar = listar;
