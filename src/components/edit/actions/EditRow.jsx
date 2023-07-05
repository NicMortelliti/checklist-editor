import { IconButton, Tooltip } from '@chakra-ui/react';
import { RxPencil1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/uiSlice';
import { setSelectedChecklistItem } from '../../../redux/dataSlice';

const label = 'Edit row';

export const EditRow = ({ objData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedChecklistItem(objData.id));
    dispatch(setModal('edit'));
  };

  const dispatch = useDispatch();
  return (
    <Tooltip hasArrow label={label} aria-label={label}>
      <IconButton
        icon={<RxPencil1 />}
        size='xs'
        mr='5px'
        variant='blue'
        onClick={(e) => handleClick(e)}
      />
    </Tooltip>
  );
};
