import { Request, Response } from 'express';
let MensagemDoDia = require('../functions/mensagemDoDia');

class GetMessageController {
  handle(request: Request, response: Response) {
    let data = new Date();
    let dia = data.getDate();
    let mensagem = MensagemDoDia.returnMessageDay(dia);

    return response.json({ mensagem: mensagem, dia: dia });
  }
}
export { GetMessageController };
