import { useEffect, useRef, memo } from 'react';
import {
  GLYPH_OFFSET,
  GLYPH_SCALE,
  GLYPH_ACTUAL_WIDTH,
  GLYPH_ACTUAL_HEIGHT,
} from '@/constants/glyph';
import type { ParsedGlyph } from '@/types/glyph';

export interface GlyphProps {
  number: ParsedGlyph['number'];
  layout: ParsedGlyph['layout'];
  showNumber?: boolean;
}

export const Glyph = memo(({ number, layout, showNumber }: GlyphProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }

    const context = canvasRef.current.getContext('2d');
    if (context === null) {
      return;
    }

    context.canvas.width = GLYPH_ACTUAL_WIDTH;
    context.canvas.height = GLYPH_ACTUAL_HEIGHT;

    for (const line of layout) {
      const [xStart, xEnd] = line.x;
      const [yStart, yEnd] = line.y;

      context.moveTo(
        (GLYPH_OFFSET + xStart) * GLYPH_SCALE,
        (GLYPH_OFFSET + yStart) * GLYPH_SCALE,
      );
      context.lineTo(
        (GLYPH_OFFSET + xEnd) * GLYPH_SCALE,
        (GLYPH_OFFSET + yEnd) * GLYPH_SCALE,
      );
    }
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.stroke();

    if (showNumber) {
      context.textAlign = 'center';
      context.fillText(
        number.toString(),
        GLYPH_ACTUAL_WIDTH / 2,
        GLYPH_ACTUAL_HEIGHT - 5,
      );
    }
  }, [number, layout, showNumber]);

  return <canvas ref={canvasRef} />;
});

Glyph.displayName = 'Glyph';
