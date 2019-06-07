const db = require('./DBConnection');

async function buscaPorId(id){
	return await db.getDB().collection('registros').findOne({"id": parseInt(id)}); 
}

const excluiPorId = (id)=>{
	console.log("Id do Registro a ser excluido: " + parseInt(id));
	db.getDB().collection('registros').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("Registro excluido com sucesso." + result);
	}); 
}

async function inserir(Registro){
	await db.getDB().collection('registros').insertOne(Registro, (erro, result) => {
			erro ? console.log(erro) : console.log("Registro salvo com sucesso." + result);
		});	
}

async function alterar(registro){
	await db.getDB().collection('registros').updateOne({
		"id": parseInt(registros.id)},{ 
			$set: {
		 		"empresa": registro.empresa, 
		 		"produto": registro.produto,
		 		"data": regsitro.data, 
		 		"valor": registro.valor
		 	}
		}, (erro, res) => {
				erro ? console.log(erro) : console.log("Registro alterado com Sucesso." + res);
  		}
  	);
}

async function listar(){
	console.log("Veio no listar");
	return await db.getDB().collection('registros').find().toArray(); 
}

module.exports.buscaPorId = buscaPorId;
module.exports.excluiPorId = excluiPorId;
module.exports.inserir = inserir;
module.exports.alterar = alterar;
module.exports.listar = listar;