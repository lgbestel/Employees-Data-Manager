import EmployeeController from '../controller/employee.controller';
import { Router } from 'express';
import MonthValidation from '../middlwares/monthValidation';

const employeeRouter = Router();
const employeeController = new EmployeeController();
const monthValidation = new MonthValidation();

employeeRouter.get('/search', employeeController.findOne);
employeeRouter.get('/groupbyrole', employeeController.groupByRole);
employeeRouter.get('/birthmonth', monthValidation.validate, employeeController.getByBirthMonth);
employeeRouter.get('/eldest', employeeController.getEldest);
employeeRouter.get('/sorted', employeeController.getSorted);
employeeRouter.get('/payroll', employeeController.getPayroll);
employeeRouter.get('/wages', employeeController.getMinimumWagesPerEmployee);
employeeRouter.get('/', employeeController.findAll);
employeeRouter.post('/', employeeController.create);
employeeRouter.delete('/:id', employeeController.remove);
employeeRouter.put('/payraise/:raiseIndex', employeeController.applyPayRaise);

export default employeeRouter;
