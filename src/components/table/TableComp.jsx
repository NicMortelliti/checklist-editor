import { Table, TableContainer } from '@chakra-ui/react';
import { TableHeaders } from './TableHeaders';
import { TableContent } from './TableContent';

export const TableComp = () => {
  return (
    <TableContainer>
      <Table colorScheme='teal' size='sm'>
        <TableHeaders />
        <TableContent />
      </Table>
    </TableContainer>
  );
};
