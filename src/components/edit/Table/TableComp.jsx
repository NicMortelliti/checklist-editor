import { Table, TableContainer } from '@chakra-ui/react';
import { TableHeaders } from './TableHeaders';
import { TableRows } from './TableRows';

export const TableComp = () => {
  return (
    <TableContainer>
      <Table colorScheme='teal' size='sm'>
        <TableHeaders />
        <TableRows />
      </Table>
    </TableContainer>
  );
};
