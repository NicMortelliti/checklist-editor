import { IconButton } from '@chakra-ui/react';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/uiSlice';

export const Delete = () => {
  const dispatch = useDispatch();
  return (
    <>
      <IconButton
        icon={<RxCross1 />}
        size='xs'
        colorScheme='red'
        onClick={() => dispatch(setModal('delete'))}
      />
    </>
  );
};
