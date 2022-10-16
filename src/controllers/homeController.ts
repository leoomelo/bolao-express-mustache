import { Request, Response } from 'express';

import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let matches = require('../../data/matches.json')
    console.log(matches)
    let users = await User.find({})
    console.log(users)
    res.render('pages/home', {
        users,
        matches
    });
};