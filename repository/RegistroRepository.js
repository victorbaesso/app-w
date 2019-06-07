const db = require('./DBConnection');

const findOne = async function(id) {
  return await db.getDB().collection('registros').findOne({
    "id": parseInt(id)
  });
}

const excluir = (id) => {
  db.getDB().collection('registros').deleteOne({
    "id": parseInt(id)
  }, (erro, result) => {
    erro ? console.log(erro) : console.log("Registro excluido com sucesso.");
  });
}

const salvar = function(registro) {
  if (registro.id != null) {
    alterar(registro);
  } else {
    registro.id = new Date().getTime();
    inserir(registro);
  }
}

function inserir(Registro) {
  db.getDB().collection('registros').insertOne(Registro, (erro, result) => {
    erro ? console.log(erro) : console.log("Registro salvo com sucesso.");
  });
}

function alterar(registro) {
  db.getDB().collection('registros').updateOne({
    "id": parseInt(registro.id)
  }, {
    $set: {
      "empresa": registro.empresa,
      "produto": registro.produto,
      "data": registro.data,
      "valor": registro.valor
    }
  }, (erro, res) => {
    erro ? console.log(erro) : console.log("Registro alterado com Sucesso.");
  });
}

async function listar() {
  return await db.getDB().collection('registros').find().toArray();
}

module.exports.findOne = findOne;
module.exports.excluir = excluir;
module.exports.salvar = salvar;
module.exports.listar = listar;
