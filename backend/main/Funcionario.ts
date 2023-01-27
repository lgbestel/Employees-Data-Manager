import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa {
    constructor(
      public salario: number,
      public funcao: string,
      public nome: string,
      public dataNascimento: Date,
    ) {
      super(nome, dataNascimento)
      this.salario = salario;
      this.funcao= funcao
    }
}