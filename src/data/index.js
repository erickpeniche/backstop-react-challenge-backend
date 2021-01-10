import mockData from './digimons.json';

export const getReducedDigimons = (digimons = []) => {
  if (!digimons || digimons.length === 0) return [];

  const digimonMap = new Map();

  digimons.forEach((digimon) => {
    const { id, ...rest } = digimon;

    digimonMap.set(id, rest);
  });

  return digimonMap;
};

export const digimons = mockData;

export default getReducedDigimons(mockData);
