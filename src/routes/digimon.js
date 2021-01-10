import { Router } from 'express';
import { digimons } from '../data';

const router = new Router();

export const getAllDigimons = async (req, res) => {
  try {
    return res.json(digimons);
  } catch (e) {
    return res.status(500).json({ message: 'Server Error', error: e });
  }
};

export const getDigimonById = async () => {

};

export const getRandomDigimon = async () => {

};

router.get('/', getAllDigimons);
router.get('/:id', getDigimonById);
router.get('/random', getRandomDigimon);

export default router;
