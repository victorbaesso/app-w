const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://aula_2019_1:aula2019_1xxe@cluster0-ptgti.mongodb.net/test?retryWrites=true';
var db;

MongoClient.connect(url, { useNewUrlParser: true }, (erro, conexao) =>{
	if (erro) { 
		return console.log(erro);
	}	
	db = conexao.db("aula_veiculos");
});

async function buscaPorId(id){
	await db.collection('registros').findOne({"id": parseInt(id)}, (erro, registro) => {
			if(erro) 
				console.log(erro); 
			else 
				return registro;
		}); 
}

const excluiPorId = (id)=>{
	console.log("Id do Registro a ser excluido: " + parseInt(id));
	db.collection('registros').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("Registro excluido com sucesso." + result);
	}); 
}

async function inserir(Registro){
	await db.collection('registros').insertOne(Registro, (erro, result) => {
			erro ? console.log(erro) : console.log("Registro salvo com sucesso." + result);
		});	
}

async function alterar(registro){
	await db.collection('registros').updateOne({
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
	await db.collection('registros').find().toArray((erro, registro) => {
		if(erro) 
			console.log(erro); 
		else 
			return registro;
	}); 
}

module.exports.buscaPorId = buscaPorId;

module.exports.excluiPorId = excluiPorId;

module.exports.inserir = inserir;

module.exports.alterar = alterar;

module.exports.listar = listar;