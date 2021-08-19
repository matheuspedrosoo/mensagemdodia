import { Router } from 'express';

const routes = Router();

import { GetMessageController } from './controllers/GetMessageController';

const getMessageController = new GetMessageController();

routes.get('/', getMessageController.handle);

export default routes;
