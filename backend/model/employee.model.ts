import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IEmployeeInsertion from '../interfaces/IEmployeeInsertion';

export default class EmployeeModel { 

public create = async (funcionario: IEmployeeInsertion) => {
  const { nome, dataNascimento, salario, funcaoId } = funcionario;
  const query = 'INSERT INTO Projedata.employees (nome, dataNascimento, salario, funcaoId) VALUES (?,?,?,?);'
  const values = [nome, dataNascimento, salario, funcaoId];
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);
  return insertId;
}

public findAll = async (): Promise<RowDataPacket[]> => {
  const query = `
  SELECT e.id, e.nome, DATE_FORMAT(e.dataNascimento, "%e/%m/%Y") as dataNascimento, FORMAT(e.salario, 2, 'de_DE') as salario, r.funcao
  FROM Projedata.employees e
	LEFT JOIN Projedata.roles r
		ON e.funcaoId = r.id;
  `
  const [employees] = await connection
    .execute<RowDataPacket[]>(query);
  return employees;
}

public remove = async (id: number) => {
  const query = 'DELETE FROM Projedata.employees WHERE id = ?'
  const [{ affectedRows }] = await connection.execute<ResultSetHeader>(query, [id]);
  return affectedRows;
}

public findOne = async (str: string) => {
  const query = `SELECT id, nome FROM Projedata.employees WHERE nome LIKE  '%${str}%';`
  const [employee] = await connection
  .execute<RowDataPacket[]>(query);
return employee;
}

public applyPayRaise = async (raiseIndex: number) => {
  const query = `UPDATE Projedata.employees
  SET salario = salario * ${1+raiseIndex};`;
  const [{ affectedRows }] = await connection.execute<ResultSetHeader>(query);
  return affectedRows;
}

}