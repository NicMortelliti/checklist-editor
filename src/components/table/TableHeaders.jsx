import { useSelector } from 'react-redux';
import { Th, Thead, Tr } from '@chakra-ui/react';

export const TableHeaders = () => {
  const { columns } = useSelector((state) => state.ui);

  return (
    <Thead>
      <Tr>
        {columns.map((eachColumn) => (
          <Th key={eachColumn.title}>{eachColumn.title}</Th>
        ))}
      </Tr>
    </Thead>
  );
};
