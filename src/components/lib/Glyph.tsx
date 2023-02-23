import { useEffect, useRef } from 'react';
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

export const Glyph = ({ number, layout, showNumber }: GlyphProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }

    const context = canvasRef.current.getContext('2d');
    if (context === null) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();
    context.translate(GLYPH_OFFSET * GLYPH_SCALE, GLYPH_OFFSET * GLYPH_SCALE);
    for (const line of layout) {
      const [xStart, xEnd] = line.x;
      const [yStart, yEnd] = line.y;

      context.moveTo(xStart * GLYPH_SCALE, yStart * GLYPH_SCALE);
      context.lineTo(xEnd * GLYPH_SCALE, yEnd * GLYPH_SCALE);
    }
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.stroke();
    context.restore();

    if (showNumber) {
      context.textAlign = 'center';
      context.fillText(
        number.toString(),
        GLYPH_ACTUAL_WIDTH / 2,
        GLYPH_ACTUAL_HEIGHT - 5,
      );
    }
  }, [number, layout, showNumber]);

  return (
    <canvas
      width={GLYPH_ACTUAL_WIDTH}
      height={GLYPH_ACTUAL_HEIGHT}
      ref={canvasRef}
    />
  );
};
