import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export default class RoleModel { 

public create = async (role: string) => {
  const query = 'INSERT INTO Projedata.roles (funcao) VALUES (?);'
  const values = [role];
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);
  return insertId;
}

public findAll = async (): Promise<RowDataPacket[]> => {
  const [roles] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Projedata.roles;');
  return roles;
}

}