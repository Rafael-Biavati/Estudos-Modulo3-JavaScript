//Herança sem Classes


const contaBancaria = {
    
    saldo: 0,
    depositar: function(valor) {
      this.saldo += valor;
      console.log(`Depositado: R$${valor}. Saldo atual: R$${this.saldo}`);
    },
    sacar: function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Sacado: R$${valor}. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente.");
      }
    },
    verificarSaldo: function() {
      console.log(`Saldo atual: R$${this.saldo}`);
    }
  };
  


  const contaPoupanca = Object.create(contaBancaria);
  contaPoupanca.calcularJuros = function(taxa) {
    const juros = this.saldo * (taxa / 100);
    this.depositar(juros);
    console.log(`Juros de R$${juros} calculados e depositados. Novo saldo: R$${this.saldo}`);
  };
  
  contaPoupanca.depositar(1000);      
  contaPoupanca.sacar(200);           
  contaPoupanca.verificarSaldo();     
  contaPoupanca.calcularJuros(5);     
  
  console.log(Object.getPrototypeOf(contaPoupanca) === contaBancaria); 
  