import { useEffect, useRef, memo } from 'react';
import { useGlyph } from '@/hooks/use-glyph';
import {
  GLYPH_WIDTH,
  GLYPH_HEIGHT,
  GLYPH_OFFSET,
  GLYPH_SCALE,
  GLYPH_MAX_NUMBER,
} from '@/constants/glyph';
import type { ParsedGlyph } from '@/types/glyph';

export interface GlyphProps {
  number: ParsedGlyph['number'];
  showNumber?: boolean;
  withoutOffset?: boolean;
}

const lineWidth = 2;

const getGlyphSize = (withOffset = true) => {
  const offset = withOffset ? GLYPH_OFFSET : 0;
  const gap = withOffset ? 0 : lineWidth / 2;

  return {
    width: (GLYPH_WIDTH + offset * 2) * GLYPH_SCALE + gap * 2,
    height: (GLYPH_HEIGHT + offset * 2) * GLYPH_SCALE + gap * 2,
    offset,
    gap,
  };
};

export const Glyph = memo(
  ({ number, showNumber = false, withoutOffset = false }: GlyphProps) => {
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

      const { width, height, offset, gap } = getGlyphSize(!withoutOffset);

      context.canvas.width = width;
      context.canvas.height = height;

      context.save();
      context.translate(gap, gap);

      if (glyphs.length === 0) {
        context.strokeRect(0, 0, context.canvas.width, context.canvas.height);
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        if (withoutOffset) {
          context.fillText('Glyph', width / 2, height / 2 - 10);
          context.fillText('not', width / 2, height / 2);
          context.fillText('found', width / 2, height / 2 + 10);
        } else {
          context.fillText('Glyph not found', width / 2, height / 2);
        }

        return;
      }

      for (const glyph of glyphs) {
        for (const line of glyph.layout) {
          const [xStart, xEnd] = line.x;
          const [yStart, yEnd] = line.y;

          context.moveTo(
            (offset + xStart) * GLYPH_SCALE,
            (offset + yStart) * GLYPH_SCALE,
          );
          context.lineTo(
            (offset + xEnd) * GLYPH_SCALE,
            (offset + yEnd) * GLYPH_SCALE,
          );
        }
        context.lineWidth = lineWidth;
        context.lineCap = 'round';
        context.stroke();
      }

      if (showNumber) {
        context.textAlign = 'center';
        context.fillText(
          Math.min(number, GLYPH_MAX_NUMBER).toString(),
          width / 2,
          height - 5,
        );
      }

      context.restore();
    }, [glyphs, number, showNumber, withoutOffset]);

    return <canvas ref={canvasRef} />;
  },
);

Glyph.displayName = 'Glyph';
