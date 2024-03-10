class Animal{
    constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
    }
  
    descrever(){
      return `O nome do animal é ${this.nome} e ele tem ${this.idade} anos.`;
    }
  }
class Gato extends Animal {
    constructor(nome, idade, cor){
        super(nome, idade);
        this.cor = cor;
    }

    descrever(){
        return `${super.descrever()} Ele tem a cor ${this.cor}.`;
    }
    miar(){
        console.log( `O gato faz MIAUUU`);
    }

}

const animal1 = new Animal("Cachorro", "10");
const animal2 = new Animal("Pato", "8");
const animal3 = new Gato("Gato", "2", "preto");

console.log(animal1.descrever());
console.log(animal2.descrever());
console.log(animal3.descrever());
animal3.miar();