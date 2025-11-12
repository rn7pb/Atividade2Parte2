
// Questão 5
const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;

function resumoPedidos(jsonString) {
  const dados = JSON.parse(jsonString);
  const pedidos = dados.pedidos;

  let entregues = 0;
  let processando = 0;
  let valorTotal = 0;

  for (let pedido of pedidos) {
    valorTotal += pedido.total;
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      processando++;
    }
  }

  return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${valorTotal.toFixed(2)}`;
}

console.log(resumoPedidos(pedidosJSON));
