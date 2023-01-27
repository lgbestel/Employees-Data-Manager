import {Request, Response, NextFunction} from 'express';

export default class MonthValidation {
  public validate = (req: Request, res: Response, next: NextFunction) => {
    const { body: { month1 }} = req;
    if (!month1 || month1 > 12 || month1 < 1) return res.status(422).json({ message: 'Invalid month'});
    if (req.body.month2 > 12 || req.body.month2 < 1) return res.status(422).json({ message: 'Invalid month'});
    return next();
  }
}