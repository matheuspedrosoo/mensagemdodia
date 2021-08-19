"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessageController = void 0;
var MensagemDoDia = require('../functions/mensagemDoDia');
var GetMessageController = /** @class */ (function () {
    function GetMessageController() {
    }
    GetMessageController.prototype.handle = function (request, response) {
        var data = new Date();
        var dia = data.getDate();
        var mensagem = MensagemDoDia.returnMessageDay(dia);
        return response.json({ mensagem: mensagem, dia: dia });
    };
    return GetMessageController;
}());
exports.GetMessageController = GetMessageController;
