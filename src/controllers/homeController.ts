import { Request, Response } from 'express';

import { User } from '../models/User';

export const home = (req: Request, res: Response)=>{
    let list = User.getAll();

    res.render('pages/home', {
        users: list
    });
};