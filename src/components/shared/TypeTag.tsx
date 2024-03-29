import { useSelector } from 'react-redux';
import { Tag } from '@chakra-ui/react';

export const typeTag = (type: string) => {
  const { typeColors } = useSelector((state) => state.ui);

  // Capitalize first character in string
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <Tag size='sm' borderRadius='full' colorScheme={typeColors[type]}>
      {capitalizedType}
    </Tag>
  );
};
