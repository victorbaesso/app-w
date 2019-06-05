

<<<<<<< HEAD
async function buscaPorId(id){
	await db.collection('empresas').findOne({"id": parseInt(id)}, (erro, empresa) => {
			if(erro){
				console.log(erro);
				return null;
			}
			else
				return empresa;
		});
=======
const db = require('./DBConnection');

const salvar = async function(empresa){
	if (empresa.id != null) {
		await alterar(empresa);
	} else {
		empresa.id = new Date().getTime();
		await inserir(empresa);
	}
>>>>>>> 4d8bba00a2b35d45e87c2e0b0252a2718385226b
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

<<<<<<< HEAD
async function listar(){
	await db.collection('empresas').find().toArray((erro, empresa) => {
		if(erro){
=======
const listar = async function(){
	await db.getDB().collection('empresas').find().toArray((erro, empresa) => {
		if(erro)
>>>>>>> 4d8bba00a2b35d45e87c2e0b0252a2718385226b
			console.log(erro);
			return [];
		} else{
			return empresa;
		}
	});
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
