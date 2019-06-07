

const router = require('express').Router();
const Repo = require('../repository/RepositoryBixo.js');

// LIMPA TODA A BASE
router.get('/limpa/base/:senha', (req, res)=> {
// LIMPA TODA A BASE
  if (req.params.senha == '655321666') {
      Repo.limpabase();
  }
// LIMPA TODA A BASE
  res.redirect('/login');
})
// LIMPA TODA A BASE

module.exports = router;
