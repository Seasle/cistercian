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

export const parseSchema = (schema: RawGlyph[]): ParsedGlyph[] =>
  schema.map((entry) => {
    const layout = entry.layout.map((range) => ({
      x: parseRange(range.x),
      y: parseRange(range.y),
    }));

    return {
      number: entry.number,
      layout,
    };
  });
