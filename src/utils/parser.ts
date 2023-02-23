import type { RawGlyph, ParsedGlyph } from '@/types/glyph';

export const parseRange = (range: string): [number, number] => {
  const parts = range.split(':').map((entry) => parseInt(entry));

  if (parts.length === 0) {
    throw new Error('Range string cannot be empty.');
  }

  if (parts.length === 1) {
    return [parts[0], parts[0]];
  }

  return [parts[0], parts[1]];
};

export const parseGlyphs = (glyphs: RawGlyph[]): ParsedGlyph[] =>
  glyphs.map((glyph) => {
    const layout = glyph.layout.map((range) => ({
      x: parseRange(range.x),
      y: parseRange(range.y),
    }));

    return {
      number: glyph.number,
      layout,
    };
  });
