function usuariosDAO(connection){
  this._connection = connection;
}

usuariosDAO.prototype.inserirUsuario = function(usuario, res){
  var dados = {
    operacao: "inserir",
    usuario: usuario,
    collection: "usuarios",
    callback: function(err, result) {
      res.send("olá Marilene");
    }
  };
  this._connection(dados);
}

module.exports = function(){
  return usuariosDAO;
}