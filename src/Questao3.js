
// Questão 3
const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;

function produtosAcimaDe50(jsonString) {
  const dados = JSON.parse(jsonString);
  const produtosFiltrados = dados.produtos.filter(p => p.preco > 50);
  return produtosFiltrados.map(p => p.nome);
}

console.log("Produtos acima de R$50:", produtosAcimaDe50(produtosJSON));
