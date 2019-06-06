const db = require('./DBConnection');

async function buscaPorId(id){
	await db.collection('produtos').findOne({"id": parseInt(id)}, (erro, produto) => {
		if(erro){
			console.log(erro);
			return null;
		}else{
			return produto;
		}
	});
}

const salvar = function(produto){
	if (produto.id != null) {
		alterar(produto);
	} else {
		produto.id = new Date().getTime();
		inserir(produto);
	}
}

const excluir = function(id){
	console.log("Id do produto a ser excluido: " + parseInt(id));
	db.getDB().collection('produtos').deleteOne({"id": parseInt(id)}, (erro, result) => {
		erro ? console.log(erro) : console.log("produto excluido com sucesso." + result);
	});
}

function inserir(produto){
	db.getDB().collection('produtos').insertOne(produto, (erro, result) => {
			erro ? console.log(erro) : console.log("Produto salvo com sucesso." + result);
		});
}

function alterar(produto){
	db.getDB().collection('produtos').updateOne({
		"id": parseInt(produto.id)},{
			$set: {
		 		"nome": produto.nome
		 	}
		}, (erro, res) => {
				erro ? console.log(erro) : console.log("produto alterado com Sucesso." + res);
  		}
  	);
}

const listar = async function(){
	return await db.getDB().collection('produtos').find().toArray();
}


const findOne = async function(id){
	await db.getDB().collection('produtos').findOne({"id": parseInt(id)}, (erro, produto) => {
		if(erro){
			console.log(erro);
			return null;	
		} else {
			return produto;
		}
	});
}

module.exports.findOne = findOne;
module.exports.excluir = excluir;
module.exports.salvar = salvar;
module.exports.listar = listar;