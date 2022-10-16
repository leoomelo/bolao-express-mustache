import { Request, Response } from 'express';
import Bet from '../models/Bet';

import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let matches = require('../../data/matches.json')

    let users = await User.find({})
    console.log(users)

    let bets = await Bet.find({userEmail: 'leoomelo@gmail.com'})

    // let bet = new betModel({team1: 'Qatar', team2: 'Equador', teamScore1: 1, teamScore2: 2, userEmail: 'leoomelo@gmail.com'})
    // const betSaved = await bet.save()
    // console.log(betSaved)

    res.render('pages/home', {
        users,
        matches,
        bets
    });
};