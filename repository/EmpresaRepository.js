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
	await db.collection('empresas').findOne({"id": parseInt(id)}, (erro, empresa) => {
			if(erro){
				console.log(erro);
				return null;
			}
			else
				return empresa;
		});
}

const excluiPorId = (id)=>{
	console.log("Id do empresa a ser excluido: " + parseInt(id));
	db.collection('empresas').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("empresa excluido com sucesso." + result);
	});
}

async function inserir(empresa){
	await db.collection('empresas').insertOne(empresa, (erro, result) => {
			erro ? console.log(erro) : console.log("empresa salvo com sucesso." + result);
		});
}

async function alterar(empresa){
	await db.collection('empresas').updateOne({
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
	await db.collection('empresas').find().toArray((erro, empresa) => {
		if(erro){
			console.log(erro);
			return [];
		} else{
			return empresa;
		}
	});
}

module.exports.buscaPorId = buscaPorId;

module.exports.excluiPorId = excluiPorId;

module.exports.inserir = inserir;

module.exports.alterar = alterar;

module.exports.listar = listar;
