const bancoDeDados = [];

function listarTodos(req, res) {
  return res.json(bancoDeDados);
}
function adicionar(req, res) {
  console.log(req.body)
  if (req.body !== "") {
    bancoDeDados.push(req.body);
    console.log(req.body);
    return res.json({ mensagem: "cadastrado com sucesso" });
  } else {
    res.json({ mensagem: "Não é possivel cadastro" });
  }
}
module.exports = {
  listarTodos,
  adicionar,
};
