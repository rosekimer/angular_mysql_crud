import{Request, Response} from 'express';
import pool from '../database';

class GamesController{
    public list(req: Request, res: Response){
        res.json({text: 'listing games'})
        }

    public getOne(req: Request, res: Response){
        res.json({text: 'This is a game' + req.params.id})
        }

    public create(req:Request, res:Response ){
        res.json({text: 'creating a game'})
    }

    public update(req:Request, res:Response ){
        res.json({text: 'updating  game' + req.params.id})
    }

    public delete(req:Request, res:Response ){
        res.json({text: 'deleting a game' + req.params.id})
    }
}
const gamesController = new GamesController();
export default gamesController;
 