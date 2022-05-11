import { Router } from "express";
import gamesController from "../controllers/gamesController";

class GamesRoutes{
 
    public routes : Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.routes.get("/", gamesController.list);
        this.routes.get("/:id", gamesController.getOne);
        this.routes.post('/',gamesController.create);
        this.routes.put('/:id',gamesController.update);
        this.routes.delete('/:id',gamesController.delete);
    }

}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.routes;