import { Router } from 'express';
import { serviceHealth } from '../controllers/health.controller.js';

const healthRouter = Router(); 

healthRouter.get('/', serviceHealth);

export default healthRouter
