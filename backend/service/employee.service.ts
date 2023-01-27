import IEmployeeInsertion from '../interfaces/IEmployeeInsertion';
import EmployeeModel from '../model/employee.model';

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export default class EmployeeService {
  model = new EmployeeModel();

  public create = async (funcionario: IEmployeeInsertion) => {
    const id = await this.model.create(funcionario);
    return { type: SUCCESS, payload: { id, ...funcionario } };
  }

  public findAll = async () => {
    const employees = await this.model.findAll();
    return { type: SUCCESS, payload: employees };
  }

  public remove = async (id: number) => {
    const affectedRows = await this.model.remove(id);
    if (affectedRows > 0 ) return { type: SUCCESS, payload: affectedRows };
    return { type: ERROR, payload: affectedRows }
  }

  public findOne = async (str: string) => {
    const employees = await this.model.findOne(str);
    if (!employees) return { type: ERROR, payload: null }
    return { type: SUCCESS, payload: employees };
  }

  public applyPayRaise = async (raiseIndex: number) => {
    const affectedRows = await this.model.applyPayRaise(raiseIndex);
    if (affectedRows > 0 ) return { type: SUCCESS, payload: affectedRows };
    return { type: ERROR, payload: affectedRows }
  }

  public groupByRole = async () => {
    const employees = await this.model.findAll();
    const grouped = employees.reduce((acc, empl) => {
      if (!acc[empl.funcao]) {
        acc[empl.funcao] = []
      }
      acc[empl.funcao].push(empl)
      return acc;
    }, {})
    return grouped;
  }

  public getByBirthMonth = async (birthMonth1: number, birthMonth2: number = 0) => {
    const employees = await this.model.findAll();
    const filteredEmployees = employees.filter((empl) => {
      const birthMonth = Number(empl.dataNascimento.slice(-7, -5));
      return birthMonth === birthMonth1 || birthMonth === birthMonth2;
    })
    if (!filteredEmployees[0]) return {type: ERROR, payload: 'Not Found'}
    return {type: SUCCESS, payload: filteredEmployees};
  }

  public getEldest = async () => {
    const employees = await this.model.findAll();
    const today = new Date();
    const employeesWithAgeData = employees.map((empl) => {
      const splittedDate = empl.dataNascimento.split('/');
      let age = today.getFullYear() - Number(splittedDate[2]);
      const month = today.getMonth() - Number(splittedDate[1]);
      if ( month < 0 || ( month === 0 && today.getDate() <  Number(splittedDate[0]))) {
        age -= 1;
      }
      return { nome: empl.nome, idade: age };
    }).sort((a, b) => b.idade - a.idade);
    return { type: SUCCESS, payload: employeesWithAgeData[0] };
  }

  public getSorted = async () => {
    const employees = await this.model.findAll();
    const sorted = employees.sort((a, b) => a.nome.localeCompare(b.nome));
    return {type: SUCCESS, payload: sorted};
  }

  public getPayroll = async () => {
    const employees = await this.model.findAll();
    const payroll = employees.reduce((acc, curr) => {
      return acc + Number(curr.salario.replace('.', '').replace(',', '.'));
    }, 0).toLocaleString('pt-BR');
    return { type: SUCCESS, payload: payroll };
  }

  public getMinimumWagesPerEmployee = async (minimumWage: number = 1212) => {
    const employees = await this.model.findAll();
    const wages = employees.map((empl) => ({ employee: empl.nome, minWages: (empl.salario / minimumWage).toFixed(2) }));
    return { type: SUCCESS, payload: wages };
  }

}