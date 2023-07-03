import { IconButton } from '@chakra-ui/react';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setSelectedChecklistItem, moveItem } from '../../../redux/dataSlice';

export const MoveRow = ({ objData, index, lengthOfArray }) => {
  const dispatch = useDispatch();
  const { id } = objData;

  const handleClick = (direction) => {
    dispatch(setSelectedChecklistItem(id));
    dispatch(moveItem(direction));
  };

  return (
    <>
      <IconButton
        icon={<RxTriangleUp />}
        size='xs'
        mr='5px'
        variant='gray'
        isDisabled={index === 0}
        onClick={() => handleClick('up')}
      />
      <IconButton
        icon={<RxTriangleDown />}
        size='xs'
        mr='5px'
        variant='gray'
        isDisabled={index === lengthOfArray - 1}
        onClick={() => handleClick('down')}
      />
    </>
  );
};
