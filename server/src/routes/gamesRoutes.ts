import { Router } from "express";

class GamesRoutes{
 
    public routes : Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.routes.get("/", (req,res) => res.send('Games'));

    }

}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.routes;