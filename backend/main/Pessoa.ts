export default abstract class Pessoa {
  constructor(
    public nome: string,
    public dataNascimento: Date,
  ) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }

}