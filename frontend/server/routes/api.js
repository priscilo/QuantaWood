import express from 'express';
const router = express.Router();

router.get('/status', (req, res) => {
    res.json({ ok: true, message: 'API activa 🚀' });
});

export default router;