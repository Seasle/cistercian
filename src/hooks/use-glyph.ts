import { useContext } from 'react';
import { Glyphs } from '@/contexts/Glyph';
import { GLYPH_MAX_NUMBER } from '@/constants/glyph';

export const useGlyph = (number: number) => {
  const glyphs = useContext(Glyphs);
  const availableNumbers = [...glyphs.keys()];
  if (availableNumbers.length === 0) {
    return [];
  }

  const entries = [];
  const remainder = Math.min(number, GLYPH_MAX_NUMBER);
  let current = remainder;

  let iteration = 0;
  while (current > 0) {
    const maxNumber = Math.max(
      ...availableNumbers.filter((entry) => entry <= current),
    );
    const glyph = glyphs.get(maxNumber);
    if (glyph !== undefined) {
      entries.push(glyph);
      current -= glyph.number;
    }

    iteration++;
    if (iteration >= 100) {
      throw new Error('Cannot create glyph.');
    }
  }

  return entries;
};
