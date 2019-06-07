const db = require('./DBConnection');

const salvar = async function(empresa) {
  if (empresa.id != null) {
    await alterar(empresa);
  } else {
    empresa.id = new Date().getTime();
    await inserir(empresa);
  }
}

const excluir = function(id) {
  db.getDB().collection('empresas').deleteOne({
    "id": parseInt(id)
  }, (erro, result) => {
    erro ? console.log(erro) : console.log("Empresa excluido com sucesso.");
  });
}

function inserir(empresa) {
  db.getDB().collection('empresas').insertOne(empresa, (erro, result) => {
    erro ? console.log(erro) : console.log("Empresa salvo com sucesso.");
  });
}

function alterar(empresa) {
  db.getDB().collection('empresas').updateOne({
    "id": parseInt(empresa.id)
  }, {
    $set: {
      "nome": empresa.nome
    }
  }, (erro, res) => {
    erro ? console.log(erro) : console.log("Empresa alterado com Sucesso.");
  });
}

async function listar() {
  return await db.getDB().collection('empresas').find().toArray();
}

const findOne = async function(id) {
  return await db.getDB().collection('empresas').findOne({
    "id": parseInt(id)
  });
}

module.exports.findOne = findOne;

module.exports.excluir = excluir;

module.exports.salvar = salvar;

module.exports.listar = listar;
