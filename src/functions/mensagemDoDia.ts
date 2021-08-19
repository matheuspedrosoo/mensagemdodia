const dados = require('../db/dados');

export function returnMessageDay(day: any) {
  return dados.frases[day - 1];
}
