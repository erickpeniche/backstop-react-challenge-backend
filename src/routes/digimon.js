import { Router } from 'express';

const router = new Router();

export const getAllDigimons = async (req, res) => {
  res.json({ test: true });
};

export const getDigimonById = async () => {

};

export const getRandomDigimon = async () => {

};

router.get('/', getAllDigimons);
router.get('/:id', getDigimonById);
router.get('/random', getRandomDigimon);

export default router;
