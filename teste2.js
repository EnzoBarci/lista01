class somadorDeNotas {
    constructor(){
      this.somadorDeNotas = 0;
    }
    adicionarNota(nota) {
      this.somadorDeNotas += nota;
    } 
    verTotal(){
      return `O valor total das notas é ${this.somadorDeNotas}.`;
    }
  }
  
  let somador = new somadorDeNotas();
  somador.adicionarNota(9)
  somador.adicionarNota(7)

  console.log(somador.verTotal());