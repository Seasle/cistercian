import { useEffect, useRef, memo } from 'react';
import { useGlyph } from '@/hooks/use-glyph';
import {
  GLYPH_OFFSET,
  GLYPH_SCALE,
  GLYPH_ACTUAL_WIDTH,
  GLYPH_ACTUAL_HEIGHT,
  GLYPH_MAX_NUMBER,
} from '@/constants/glyph';
import type { ParsedGlyph } from '@/types/glyph';

export interface GlyphProps {
  number: ParsedGlyph['number'];
  showNumber?: boolean;
}

export const Glyph = memo(({ number, showNumber }: GlyphProps) => {
  const glyphs = useGlyph(number);
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

    if (glyphs.length === 0) {
      context.strokeRect(0, 0, context.canvas.width, context.canvas.height);
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(
        'Glyph not found',
        GLYPH_ACTUAL_WIDTH / 2,
        GLYPH_ACTUAL_HEIGHT / 2,
      );

      return;
    }

    for (const glyph of glyphs) {
      for (const line of glyph.layout) {
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
    }

    if (showNumber) {
      context.textAlign = 'center';
      context.fillText(
        Math.min(number, GLYPH_MAX_NUMBER).toString(),
        GLYPH_ACTUAL_WIDTH / 2,
        GLYPH_ACTUAL_HEIGHT - 5,
      );
    }
  }, [number, glyphs, showNumber]);

  return <canvas ref={canvasRef} />;
});

Glyph.displayName = 'Glyph';
