import { useState, useEffect } from 'react';
import { Grid } from '@/components/lib/Grid';
import { Glyph } from '@/components/lib/Glyph';
import { getGlyphs } from '@/api';
import { parseSchema } from '@/utils/parser';
import type { ParsedGlyph } from '@/types/glyph';

export const App = () => {
  const [glyphs, setGlyphs] = useState<ParsedGlyph[]>([]);

  useEffect(() => {
    getGlyphs()
      .then(parseSchema)
      .then((parsedGlyphs) => setGlyphs(parsedGlyphs));
  }, []);

  return (
    <Grid>
      {glyphs.map((glyph) => (
        <Glyph
          number={glyph.number}
          layout={glyph.layout}
          showNumber
          key={glyph.number}
        />
      ))}
    </Grid>
  );
};
