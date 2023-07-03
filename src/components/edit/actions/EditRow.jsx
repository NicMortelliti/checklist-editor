import { IconButton } from '@chakra-ui/react';
import { RxPencil1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/uiSlice';
import { setSelectedChecklistItem } from '../../../redux/dataSlice';

export const EditRow = ({ objData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedChecklistItem(objData.id));
    dispatch(setModal('edit'));
  };

  const dispatch = useDispatch();
  return (
    <>
      <IconButton
        icon={<RxPencil1 />}
        size='xs'
        mr='5px'
        variant='blue'
        onClick={(e) => handleClick(e)}
      />
    </>
  );
};
