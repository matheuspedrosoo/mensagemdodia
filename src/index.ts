import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
