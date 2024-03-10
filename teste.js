class Animal{
    constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
    }
  
    descrever(){
      return `O nome do animal é ${this.nome} e ele tem ${this.idade} anos.`;
    }
  }
  
  const animal1 = new Animal("Cachorro", "10");
  const animal2 = new Animal("Gato", "8");
  
  console.log(animal1.descrever() + " " + animal2.descrever());
  
  