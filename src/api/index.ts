import assets from './assets';
import type { RawGlyph } from '@/types/glyph';

export const getGlyphs = () => assets.get('glyphs.json').json<RawGlyph[]>();
