import { useState, useEffect, type PropsWithChildren } from 'react';
import { Glyphs } from '@/contexts/Glyph';
import { getGlyphs } from '@/api';
import { parseGlyphs } from '@/utils/parser';
import type { ParsedGlyph } from '@/types/glyph';

export const GlyphsLoader = ({ children }: PropsWithChildren) => {
  const [glyphs, setGlyphs] = useState<Map<number, ParsedGlyph>>(new Map());

  useEffect(() => {
    getGlyphs()
      .then(parseGlyphs)
      .then((parsedGlyphs) =>
        setGlyphs(
          parsedGlyphs.reduce<Map<number, ParsedGlyph>>(
            (accumulator, glyph) => accumulator.set(glyph.number, glyph),
            new Map(),
          ),
        ),
      );
  }, []);

  return <Glyphs.Provider value={glyphs}>{children}</Glyphs.Provider>;
};
