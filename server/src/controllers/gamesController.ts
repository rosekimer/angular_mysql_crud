import{Request, Response} from 'express';
import pool from '../database';



class GamesController{

    public async list (req : Request, res : Response) : Promise<void> {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
     }
   // public async list(req: Request, res: Response):Promise<void> {
    //  const games = await pool.query('SELECT * from games');
    //   res.json(games);
       //console.log(games);`
        //}
    public getOne(req: Request, res: Response){
        res.json({text: 'This is a game' + req.params.id})
        }
    public async create(req:Request, res:Response ): Promise<void>{
        await pool.query('Insert into game set ?',[req.body]);
        res.json({message: 'Juego Guardado'})
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
 