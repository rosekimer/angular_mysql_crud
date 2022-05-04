"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get("/", (req, res) => res.send('Hello'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.routes;
