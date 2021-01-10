import { Router } from 'express';
import digimonsMap, { digimons } from '../data';
import getRandomIntInclusive from './utils';

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
    const match = digimonsMap.get(parseInt(id, 10));

    if (!match) {
      res.status(404).json({ message: 'Digimon not found', digimonId: id });
    }

    return res.json(match);
  } catch (e) {
    return res.status(500).json({ message: 'Server Error', error: e });
  }
};

export const getRandomDigimon = async (req, res) => {
  try {
    const digimonsArray = Array.from(digimonsMap);
    const [, digimon] = digimonsArray[getRandomIntInclusive(1, digimonsArray.length)];

    return res.json(digimon);
  } catch (e) {
    return res.status(500).json({ message: 'Server Error', error: e });
  }
};

router.get('/random', getRandomDigimon);
router.get('/:id', getDigimonById);
router.get('/', getAllDigimons);

export default router;
