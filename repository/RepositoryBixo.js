
const db = require('./DBConnection');

// LIMPA TODA A BASE
const limpabase = function() {
  db.getDB().collection('registros').deleteMany({}, (erro, result) => {
    erro ? console.log(erro) : console.log("Tudo Limpo nos Registros.");
  });
  db.getDB().collection('empresas').deleteMany({}, (erro, result) => {
    erro ? console.log(erro) : console.log("Tudo Limpo nas Empresas.");
  });
  db.getDB().collection('produtos').deleteMany({}, (erro, result) => {
    erro ? console.log(erro) : console.log("Tudo Limpo nas Produtos.");
  });
}
// LIMPA TODA A BASE

module.exports.limpabase = limpabase;
