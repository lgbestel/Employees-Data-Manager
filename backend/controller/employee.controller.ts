import { resolveSoa } from 'dns';
import { Request, Response } from 'express';
import EmployeeService from "../service/employee.service";

export default class EmployeeController {
  public service = new EmployeeService();

  public create = async (req: Request, res: Response) => {
    const funcionario = req.body;
    const newEmployee = await this.service.create(funcionario);
    return res.status(201).json(newEmployee.payload);
  }

  public findAll = async (_req: Request, res: Response) => {
    const employees = await this.service.findAll();
    return res.status(200).json(employees.payload)
  }

  public remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    const isRemoved = await this.service.remove(Number(id));
    if (isRemoved.type === 'ERROR') return res.status(404).json({ message: 'Employee not found' });
    return res.status(201).json(isRemoved.type);
  }

  public findOne = async (req: Request, res: Response) => {
    const str = req.query.name;
    const employees = await this.service.findOne(str as string);
    return res.status(200).json(employees.payload)
  }

  public applyPayRaise = async (req: Request, res: Response) => {
    const raiseIndex = req.params.raiseIndex;
    const isUpdated = await this.service.applyPayRaise(+raiseIndex);
    if (isUpdated.type === 'ERROR') return res.status(500).json({ message: 'Internal error' });
    return res.status(201).json(isUpdated.type);
  }

  public groupByRole = async (_req: Request, res: Response) => {
    const groupedEmployees = await this.service.groupByRole();
    return res.status(200).json(groupedEmployees);
  }

  public getByBirthMonth = async (req: Request, res: Response) => {
    const { body: { month1, month2 }} = req;
    const employees = await this.service.getByBirthMonth(Number(month1), Number(month2));
    if (employees.type === 'ERROR') return res.status(404).json(employees.payload);
    return res.status(200).json(employees.payload);
  }

  public getEldest = async (_req: Request, res: Response) => {
    const employees = await this.service.getEldest();
    return res.status(200).json(employees.payload);
  }

  public getSorted = async (_req: Request, res: Response) => {
    const employees = await this.service.getSorted();
    return res.status(200).json(employees.payload);
  }

  public getPayroll = async (_req: Request, res: Response) => {
    const payroll = await this.service.getPayroll();
    return res.status(200).json(payroll.payload);
  }

  public getMinimumWagesPerEmployee = async (req: Request, res: Response) => {
    const minimumWage = req.body.minimumWage;
    const wages = await this.service.getMinimumWagesPerEmployee(minimumWage);
    return res.status(200).json(wages.payload);
  }
}