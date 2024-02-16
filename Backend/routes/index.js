import { Router } from 'express'
import movieRoutes from './movie.routes.js'
import healthRoutes from './health.routes.js'

const router = Router();

router.use('/health', healthRoutes)
router.use('/movies', movieRoutes);

export default router