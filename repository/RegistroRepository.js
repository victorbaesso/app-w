

const db = require('./DBConnection');

const salvar = function(registro){
	if (registro.id != null) {
		alterar(registro);
	} else {
		registro.id = new Date().getTime();
		inserir(registro);
	}
}

const excluir = function(id){
	console.log("Id do Registro a ser excluido: " + parseInt(id));
	db.getDB().collection('registros').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("Registro excluido com sucesso." + result);
	});
}

function inserir(registro){
	db.getDB().collection('registros').insertOne(registro, (erro, result) => {
			erro ? console.log(erro) : console.log("Registro salvo com sucesso." + result);
		});
}

function alterar(registro){
	db.getDB().collection('registros').updateOne({
		"id": parseInt(registro.id)},{
			$set: {
		 		"empresa": registro.empresa,
		 		"produto": registro.produto,
		 		"data": registro.data,
		 		"valor": registro.valor
		 	}
		}, (erro, res) => {
				erro ? console.log(erro) : console.log("Registro alterado com Sucesso." + res);
  		}
  	);
}

const listar = async function(){
	await db.getDB().collection('registros').find().toArray((erro, registro) => {
		if(erro)
			console.log(erro);
		else
			return registro;
	});
}

const findOne = async function(id){
	await db.getDB().collection('registros').findOne({"id": parseInt(id)}, (erro, registro) => {
			if(erro)
				console.log(erro);
			else
				return registro;
		});
}

module.exports.findOne = findOne;

module.exports.excluir = excluir;

module.exports.salvar = salvar;

module.exports.listar = listar;
