class Funcionario { //criamos a classe Funcionario
    constructor(nome, idade, salariophora,){ //logo em seguida criamos atributos de nome, idade e de salario por hora
        this.nome = nome;
        this.idade = idade;
        this.salariophora = salariophora;
    }
    calcularSalario(salario) {//criamos um método para calcular o sálario dos funcionarios/professores onde o salario por hora é multiplicado pelas horas que o professor da por mês.
      this.salario = this.salariophora * this.horasdaula;
    } 
    descrever(){//depois fazemos um método para descrever esses funcionários com os atributos ja atribuidos.
        return `${this.nome} tem ${this.idade} anos de idade, trabalha como professor de ${this.disciplina}, ganhando por hora ${this.salariophora} reais, sendo que trabalha no mês ${this.horasdaula} horas, concluindo um salário final de ${this.salario} reais por mês. `;
    }
}
class Professor extends Funcionario {// aqui criamos uma classe chamada Professor, onde se extende da classe Funcionario
    constructor(nome, idade, salariophora, disciplina, horasdaula) {//onde falamos quais atributos ao todo vamos usar
        super(nome, idade, salariophora);//e aqui falamos quais vamos pegar da classe Funcionario
        this.disciplina = disciplina;
        this.horasdaula = horasdaula;
        this.calcularSalario(horasdaula);
    }

}
const professor1 = new Professor("Claudinho", "56", "200", "Geografia", "12");//constamos um tipo de professor
const professor2 = new Professor("Egon", "34", "350", "Matemática", "18");

console.log(professor1.descrever());// e depois colocamos no console logo para aparecer a descrição do mesmo.
console.log(professor2.descrever());
