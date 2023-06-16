import { setOnBoarding } from '../../redux/uiSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

export const NewBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(setOnBoarding(false))}>
      New Checklist
    </Button>
  );
};
