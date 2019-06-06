const db = require('./DBConnection');

async function buscaPorId(id){
	await db.collection('empresas').findOne({"id": parseInt(id)}, (erro, empresa) => {
		if(erro){
			console.log(erro);
			return null;
		} else{
			return empresa;
		}
	});
}

const salvar = async function(empresa){
	if (empresa.id != null) {
		await alterar(empresa);
	} else {
		empresa.id = new Date().getTime();
		await inserir(empresa);
	}
}

const excluir = function(id){
	console.log("Id do empresa a ser excluido: " + parseInt(id));
	db.getDB().collection('empresas').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("empresa excluido com sucesso." + result);
	});
}

function inserir(empresa){
	db.getDB().collection('empresas').insertOne(empresa, (erro, result) => {
			erro ? console.log(erro) : console.log("empresa salvo com sucesso." + result);
		});
}

function alterar(empresa){
	db.getDB().collection('empresas').updateOne({
		"id": parseInt(empresa.id)},{
			$set: {
		 		"nome": empresa.nome
		 	}
		}, (erro, res) => {
				erro ? console.log(erro) : console.log("empresa alterado com Sucesso." + res);
  		}
  	);
}

async function listar(){
	return await db.collection('empresas').find().toArray();
}

const findOne = async function(id){
	await db.getDB().collection('empresas').findOne({"id": parseInt(id)}, (erro, empresa) => {
			if(erro)
				console.log(erro);
			else
				return empresa;
		});
}

module.exports.findOne = findOne;

module.exports.excluir = excluir;

module.exports.salvar = salvar;

module.exports.listar = listar;
