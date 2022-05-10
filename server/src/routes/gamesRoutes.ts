import { Router } from "express";
import gamesController from "../controllers/gamesController";

class GamesRoutes{
 
    public routes : Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.routes.get("/", gamesController.index);

    }

}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.routes;