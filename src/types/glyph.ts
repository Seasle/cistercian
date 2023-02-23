export interface RawGlyph {
  number: number;
  layout: RawLayout[];
}

export interface RawLayout {
  x: string;
  y: string;
}

export interface ParsedGlyph {
  number: number;
  layout: ParsedLayout[];
}

export interface ParsedLayout {
  x: [number, number];
  y: [number, number];
}
