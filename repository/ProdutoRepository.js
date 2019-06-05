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
	await db.collection('produtos').findOne({"id": parseInt(id)}, (erro, produto) => {
			if(erro)
				console.log(erro);
				return null;
			else
				return produto;
		});
}

const excluiPorId = (id)=>{
	console.log("Id do produto a ser excluido: " + parseInt(id));
	db.collection('produtos').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("produto excluido com sucesso." + result);
	});
}

async function inserir(produto){
	await db.collection('produtos').insertOne(produto, (erro, result) => {
			erro ? console.log(erro) : console.log("produto salvo com sucesso." + result);
		});
}

async function alterar(produto){
	await db.collection('produtos').updateOne({
		"id": parseInt(produto.id)},{
			$set: {
		 		"nome": produto.nome
		 	}
		}, (erro, res) => {
				erro ? console.log(erro) : console.log("produto alterado com Sucesso." + res);
  		}
  	);
}

async function listar(){
	await db.collection('produtos').find().toArray((erro, produto) => {
		if(erro){
			console.log(erro);
			return [];
		} else {
			return produto;
		}
	});
}

module.exports.buscaPorId = buscaPorId;

module.exports.excluiPorId = excluiPorId;

module.exports.inserir = inserir;

module.exports.alterar = alterar;

module.exports.listar = listar;