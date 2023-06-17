import { IconButton } from '@chakra-ui/react';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';

export const MoveRow = ({ objData, index, lengthOfArray }) => {
  return (
    <>
      <IconButton
        icon={<RxTriangleUp />}
        size='xs'
        mr='5px'
        isDisabled={index === 0}
      />
      <IconButton
        icon={<RxTriangleDown />}
        size='xs'
        mr='5px'
        isDisabled={index === lengthOfArray - 1}
      />
    </>
  );
};
