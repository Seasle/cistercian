import { GlyphsLoader } from '@/components/common/GlyphsLoader';
import { Grid } from '@/components/lib/Grid';
import { Glyph } from '@/components/lib/Glyph';
import { range } from '@/utils/collection';
import { GLYPH_MIN_NUMBER, GLYPH_MAX_NUMBER } from '@/constants/glyph';

export const App = () => {
  return (
    <GlyphsLoader>
      <Grid>
        {range(GLYPH_MIN_NUMBER, GLYPH_MAX_NUMBER + 1, 9).map((number) => (
          <Glyph number={number} showNumber key={number} />
        ))}
      </Grid>
    </GlyphsLoader>
  );
};
