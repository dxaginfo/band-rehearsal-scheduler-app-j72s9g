import express from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import bandRoutes from './band.routes';
import rehearsalRoutes from './rehearsal.routes';
import availabilityRoutes from './availability.routes';
import attendanceRoutes from './attendance.routes';
import resourceRoutes from './resource.routes';

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: API root endpoint
 *     description: Returns the API name and version
 *     responses:
 *       200:
 *         description: API information
 */
router.get('/', (req, res) => {
  res.json({
    name: 'Band Rehearsal Scheduler API',
    version: '1.0.0',
    description: 'Backend API for managing band rehearsals, attendance, and scheduling'
  });
});

// Mount all routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/bands', bandRoutes);
router.use('/rehearsals', rehearsalRoutes);
router.use('/availability', availabilityRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/resources', resourceRoutes);

export default router;