import { setOnBoarding } from '../../redux/uiSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { LuPlus } from 'react-icons/lu';

export const NewBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      leftIcon={<LuPlus />}
      aria-label='New Checklist'
      onClick={() => dispatch(setOnBoarding(false))}>
      Create New Checklist
    </Button>
  );
};
