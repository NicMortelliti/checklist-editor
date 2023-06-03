import { Button } from 'antd';
import { setOnBoarding } from '../../../redux/uiSlice';
import { useDispatch } from 'react-redux';

const NewBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(setOnBoarding(false))}>
      New Checklist
    </Button>
  );
};

export default NewBtn;
