import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import { TableHeaders } from './TableHeaders';

export const TableComp = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeaders />
      </Table>
    </TableContainer>
  );
};
