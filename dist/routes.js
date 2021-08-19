"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
var GetMessageController_1 = require("./controllers/GetMessageController");
var getMessageController = new GetMessageController_1.GetMessageController();
routes.get('/', getMessageController.handle);
exports.default = routes;
