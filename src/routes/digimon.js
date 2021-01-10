import { Router } from 'express';
import digimonsMap, { digimons } from '../data';

const router = new Router();

export const getAllDigimons = async (req, res) => {
  try {
    return res.json(digimons);
  } catch (e) {
    return res.status(500).json({ message: 'Server Error', error: e });
  }
};

export const getDigimonById = async (req, res) => {
  try {
    const { id } = req.params;
    const match = digimonsMap.get(parseInt(id));

    if (!match) {
      res.status(404).json({ message: 'Digimon not found', digimonId: id });
    }

    return res.json(match);
  } catch (e) {
    return res.status(500).json({ message: 'Server Error', error: e });
  }
};

export const getRandomDigimon = async () => {

};

router.get('/', getAllDigimons);
router.get('/:id', getDigimonById);
router.get('/random', getRandomDigimon);

export default router;
