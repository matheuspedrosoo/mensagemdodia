"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.PORT || 5000;
var data = new Date();
var MensagemDoDia = require('./functions/mensagemDoDia');
app.get('/', function (request, response) {
    var dia = data.getDate();
    var mensagem = MensagemDoDia.returnMessageDay(dia);
    response.json({ mensagem: mensagem, dia: dia });
});
app.listen(port, function () { return console.log("Servidor rodando na porta " + port); });
