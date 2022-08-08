"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generalController_1 = require("../controllers/generalController");
class GeneralRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // listado
        this.router.get('/roles', generalController_1.generalController.listarRoles);
    }
}
const generalRoutes = new GeneralRoutes();
exports.default = generalRoutes.router;
