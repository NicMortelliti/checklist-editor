import { IconButton, Tooltip } from '@chakra-ui/react';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/uiSlice';
import { setSelectedChecklistItem } from '../../../redux/dataSlice';

const label = 'Delete row';

export const Delete = ({ objData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedChecklistItem(objData.id));
    dispatch(setModal('delete'));
  };

  const dispatch = useDispatch();
  return (
    <Tooltip hasArrow closeOnClick label={label} aria-label={label}>
      <IconButton
        icon={<RxCross1 />}
        size='xs'
        variant='red'
        onClick={(e) => handleClick(e)}
      />
    </Tooltip>
  );
};
