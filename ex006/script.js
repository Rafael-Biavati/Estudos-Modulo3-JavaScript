//Callbacks

function calcularTotal(itens, callback) {
    let total = 0;
    for (let item of itens) {
      total += item.preco;
    }
  
    callback(total);
  }
  
  function exibirTotal(total) {
    console.log(`O total da compra é: R$ ${total.toFixed(2)}`);
  }
  
  const carrinho = [
    { nome: "Camiseta", preco: 29.99 },
    { nome: "Calça", preco: 59.99 },
    { nome: "Tenis", preco: 79.99 }
  ];
  
  calcularTotal(carrinho, exibirTotal);
  