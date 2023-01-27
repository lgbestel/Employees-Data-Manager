import * as express from 'express';
import employeeRouter from './routes/employee.routes';

const app = express();

app.use(express.json());
app.use('/employees', employeeRouter);

export default app;