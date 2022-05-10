import { Router } from "express";
import {indexController } from '../controllers/indexController';

class IndexRoutes{
 
    public routes : Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.routes.get("/", indexController.index);

    }

}
const indexRoutes = new IndexRoutes();
export default indexRoutes.routes;