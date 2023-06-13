import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tbody } from '@chakra-ui/react';
import { TableRenderRows } from './TableRenderRows';

export const TableRows = () => {
  const { data } = useSelector((state) => state.data);
  const [expandedRows, setExpandedRows] = useState([]);

  return (
    <Tbody>
      <TableRenderRows
        data={data}
        level={0}
        expandedRows={expandedRows}
        setExpandedRows={setExpandedRows}
      />
    </Tbody>
  );
};
