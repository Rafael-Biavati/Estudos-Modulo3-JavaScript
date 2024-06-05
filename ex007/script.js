//Herança e polimorfismo

// Classe base Animal
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    
    fazerSom() {
      console.log(`${this.nome} emite som`);
    }
  }
  
  // Cachorro herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome);
      this.raca = raca;
    }
  
    // Sobrescreve o método de animal
    fazerSom() {
      console.log(`${this.nome} late: Au Au Au Au`);
    }
  
    // Método novo de Cachorro
    buscarBolinha() {
      console.log(`${this.nome} foi buscar a bolinha.`);
    }
  }
  
  // Gato, herda de Animal
  class Gato extends Animal {
    constructor(nome, cor) {
      super(nome);
      this.cor = cor;
    }
  
    // Sobrescreve o método de animal
    fazerSom() {
      console.log(`${this.nome} mia: Miau Miau Miau`);
    }
  
    // Método novo de Gato
    subirTelhado() {
      console.log(`${this.nome} subiu no telhado.`);
    }
  }
  
  const meuCachorro = new Cachorro('Bob', 'dogo argentino');
  const meuGato = new Gato('sofia', 'Branco');
  

  meuCachorro.fazerSom(); 
  meuCachorro.buscarBolinha(); 
  
  meuGato.fazerSom(); 
  meuGato.subirTelhado(); 
  