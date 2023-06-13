import { Table, Tr, Td, TableContainer } from '@chakra-ui/react';
import { TableHeaders } from './TableHeaders';
import { TableRows } from './TableRows';

export const TableComp = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeaders />
        <TableRows />
      </Table>
    </TableContainer>
  );
};
