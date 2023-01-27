import allEmployees from "../utils/allEmployees";
import Funcionario from "./Funcionario";

export default class Principal {
  constructor( public funcionários: Funcionario[] ) {
    this.funcionários = funcionários;
  }

  // addEmployee = (employees: Funcionario[]) => {
  //   return this.funcionários = [ ...this.funcionários, ...employees];
  // }

  // removeJoão = (employees: Funcionario[] = this.funcionários): void => {
  //   const employeesWithoutJoao = employees.filter((employee) => employee.nome !== 'João');
  //   this.funcionários = employeesWithoutJoao;
  // }

  // getFuncionários() {
  //   const funcionarios = this.funcionários.map(({ dataNascimento, salario, ...rest }) => ({
  //     _dataNascimento: dataNascimento.toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
  //     salario: salario.toFixed(2),
  //     ...rest,
  //   }))
  //   return funcionarios;
  // }

  // allEmployeesPayRaise = (payRaise: number = 0.1, employees: Funcionario[] = this.funcionários): void => {
  //   this.funcionários = employees.map(({ salario, ...rest }) => ({ salario: Number(salario) * (1 + payRaise), ...rest }));
  // }

  // groupEmployeesPerRole = (employees: Funcionario[] = this.funcionários) => {
  // // 3.5 implementar com reduce
  // }

  // getGroupedEmployeesByRole = () => {
  //   // 3.6continuação da de cima
  // }

  // getEmployeesPerMonthAnniversary = (month1: number = 10, month2: number = 12) => {
  //   return this.funcionários.filter(({ nome, dataNascimento}) => dataNascimento.getMonth() === month1 || dataNascimento.getMonth() === month2);
  // }

  // getAdultEmployees = () => {
  //   // 3.9 const currentDay = new Date();
  //   // return this._funcionários.filter(({ nome, dataNascimento}) => {
  //   //   if (currentDay - dataNascimento >= 18) return { nome, idade: currentDay - dataNascimento }
  //   // });
  // }

  // getAllEmployeesSortedByName = (): Funcionario[] => {
  //   return this.funcionários.sort((a, b) => a.nome.localeCompare(b.nome));
  // }

  // getTotalPayRoll = () => {
  //   return this.funcionários.reduce((acc, curr) => acc + curr.salario, 0)
  // }

  getMinimumWagePerEmployee = (minimumWage: number = 1212) => {
    return this.funcionários.map((empl) => ({ employee: empl.nome, minWages: (empl.salario / minimumWage).toFixed(2) }))
  }

} 

const funcionarios = new Principal(allEmployees);

// console.log(funcionarios.getFuncionários());
// funcionarios.allEmployeesPayRaise();
// console.log(funcionarios.getFuncionários());