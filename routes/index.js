import express from 'express';

const router = express.Router();

/** GET /api-status - Check service status **/
router.get('/hola', (req, res) =>
  res.json({
    status: "Todo ok en Archivo routes"
  })
);

export default router;