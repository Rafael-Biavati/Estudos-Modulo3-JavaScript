// For/Of Loop - projetado para iterar sobre qualquer objeto que implemente o protocolo de iteráveis

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carlos", idade: 35 }
];

for (let pessoa of pessoas) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
}
