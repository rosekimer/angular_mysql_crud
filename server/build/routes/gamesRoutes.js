"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get("/", gamesController_1.default.list);
        this.routes.get("/:id", gamesController_1.default.getOne);
        this.routes.post('/', gamesController_1.default.create);
        this.routes.put('/:id', gamesController_1.default.update);
        this.routes.delete('/:id', gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.routes;
