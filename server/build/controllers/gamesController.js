"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        res.json({ text: 'listing games' });
    }
    getOne(req, res) {
        res.json({ text: 'This is a game' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
    }
    update(req, res) {
        res.json({ text: 'updating  game' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game' + req.params.id });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
