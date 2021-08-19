"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnMessageDay = void 0;
var dados = require('../db/dados');
function returnMessageDay(day) {
    return dados.frases[day - 1];
}
exports.returnMessageDay = returnMessageDay;
