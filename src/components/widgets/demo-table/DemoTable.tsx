import { GlyphsLoader } from '@/components/common/GlyphsLoader';
import { Glyph } from '@/components/lib/Glyph';
import { Table } from '@/components/lib/table';

const numbers = [1, 42, 1998, new Date().getFullYear()];

export const DemoTable = () => {
  return (
    <GlyphsLoader>
      <Table>
        <Table.Body>
          <Table.Row>
            {numbers.map((number) => (
              <Table.Cell key={number}>
                <Glyph number={number} withoutOffset />
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Body>
        <Table.Foot>
          <Table.Row>
            {numbers.map((number) => (
              <Table.Cell align="center" key={number}>
                {number}
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Foot>
      </Table>
    </GlyphsLoader>
  );
};
