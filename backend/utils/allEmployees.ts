import Funcionario from "../main/Funcionario";

const employeesData = [
  { nome: 'Maria', dataNascimento: new Date(18-10-2000), salario: 2009.44, funcao: 'Operador'},
  { nome: 'João', dataNascimento: new Date(12-5-1990), salario: 2284.38, funcao: 'Operador'},
  { nome: 'Caio', dataNascimento: new Date(2-5-1961), salario: 9836.14, funcao: 'Coordenador'},
  { nome: 'Miguel', dataNascimento: new Date(14-10-1988), salario: 19119.88, funcao: 'Diretor'},
  { nome: 'Alice', dataNascimento: new Date(5-1-1995), salario: 2234.68, funcao: 'Recepcionista'},
  { nome: 'Heitor', dataNascimento: new Date(19-11-1999), salario: 1582.72, funcao: 'Operador'},
  { nome: 'Arthur', dataNascimento: new Date(31-3-1993), salario: 4071.84, funcao: 'Contador'},
  { nome: 'Laura', dataNascimento: new Date(8-7-1994), salario: 3017.45, funcao: 'Gerente'},
  { nome: 'Heloísa', dataNascimento: new Date(24-5-2003), salario: 1606.85, funcao: 'Eletricista'},
  { nome: 'Helena', dataNascimento: new Date(2-9-1996), salario: 2799.93, funcao: 'Gerente'},
]

const allEmployees = employeesData.map((empl) => new Funcionario(empl.salario, empl.funcao, empl.nome, empl.dataNascimento));


export default allEmployees;