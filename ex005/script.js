//Classes


class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca; 
        this.modelo = modelo; 
        this.ano = ano; 
        this.ligado = false; 
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`O ${this.marca} ${this.modelo} está agora ligado.`);
        } else {
            console.log(`O ${this.marca} ${this.modelo} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`O ${this.marca} ${this.modelo} esta desligado.`);
        } else {
            console.log(`O ${this.marca} ${this.modelo} ja esta desligado.`);
        }
    }


    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo} -  Ano: ${this.ano}`);
    }
}

const meuCarro = new Carro('Honda', 'Civic', 2020);

meuCarro.exibirInfo(); 
meuCarro.ligar(); 
meuCarro.ligar(); 
meuCarro.desligar(); 
meuCarro.desligar(); 
