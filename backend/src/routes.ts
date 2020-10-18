import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;


// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE


// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Parâmetros ==>  
// Query Params: http://localhost:3333/users?search=diego (filtrar)
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)
