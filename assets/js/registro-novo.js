$(document).ready(function() {
  $('#valorRegistro').mask('000.000.000.000.000,00', {
    reverse: true
  });
  //$('#dataRegistro').mask('00/00/0000');

  if ($('#codProduto') && $('#codEmpresa')) {
    var codProduto = $('#codProduto').val();
    var codEmpresa = $('#codEmpresa').val();

    $('#empresaSelect').find("option[value='" + codEmpresa + "']").prop('selected', true);
    $('#produtoSelect').find("option[value='" + codProduto + "']").prop('selected', true);
  }

})
