import { Table } from './Table';
import { Head } from './Head';
import { Body } from './Body';
import { Foot } from './Foot';
import { Row } from './Row';
import { HeadCell } from './HeadCell';
import { Cell } from './Cell';

interface TableElements {
  Head: typeof Head;
  Body: typeof Body;
  Foot: typeof Foot;
  Row: typeof Row;
  HeadCell: typeof HeadCell;
  Cell: typeof Cell;
}

const CompoundTable = Object.assign<typeof Table, TableElements>(Table, {
  Head,
  Body,
  Foot,
  Row,
  HeadCell,
  Cell,
});

export { CompoundTable as Table };
