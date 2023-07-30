import { IconButton, Tooltip } from '@chakra-ui/react';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setSelectedChecklistItem, moveItem } from '../../../redux/dataSlice';

const labelUp = 'Move row up';
const labelDn = 'Move row down';

export const MoveRow = ({ objData, index, lengthOfArray }) => {
  const dispatch = useDispatch();
  const { id } = objData;

  const handleClick = (direction) => {
    dispatch(setSelectedChecklistItem(id));
    dispatch(moveItem(direction));
  };

  return (
    <>
      <Tooltip
        hasArrow
        closeOnClick
        label={labelUp}
        aria-label={labelUp}
        isDisabled={index === 0}>
        <IconButton
          icon={<RxTriangleUp />}
          size='xs'
          mr='5px'
          variant='gray'
          isDisabled={index === 0}
          onClick={() => handleClick('up')}
        />
      </Tooltip>
      <Tooltip
        hasArrow
        closeOnClick
        label={labelDn}
        aria-label={labelDn}
        isDisabled={index === lengthOfArray - 1}>
        <IconButton
          icon={<RxTriangleDown />}
          size='xs'
          mr='5px'
          variant='gray'
          isDisabled={index === lengthOfArray - 1}
          onClick={() => handleClick('down')}
        />
      </Tooltip>
    </>
  );
};
