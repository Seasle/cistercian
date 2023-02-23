import { createContext } from 'react';
import type { ParsedGlyph } from '@/types/glyph';

export const Glyphs = createContext<Map<number, ParsedGlyph>>(new Map());

Glyphs.displayName = 'Glyphs';
