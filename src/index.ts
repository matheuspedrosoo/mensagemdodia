import express, { Request, Response } from 'express';

const app = express();

const port = process.env.PORT || 5000;

let data = new Date();

let MensagemDoDia = require('./functions/mensagemDoDia');

app.get('/', (request: Request, response: Response) => {
  let dia = data.getDate();
  let mensagem = MensagemDoDia.returnMessageDay(dia);

  response.json({ mensagem: mensagem, dia: dia });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
