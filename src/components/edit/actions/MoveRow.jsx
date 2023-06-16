import { IconButton } from '@chakra-ui/react';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';

export const MoveRow = ({ objData }) => {
  return (
    <>
      <IconButton icon={<RxTriangleUp />} size='xs' mr='5px' />
      <IconButton icon={<RxTriangleDown />} size='xs' mr='5px' />
    </>
  );
};
