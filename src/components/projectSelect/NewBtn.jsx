import { setOnBoarding } from '../../redux/uiSlice';
import { useDispatch } from 'react-redux';

const NewBtn = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setOnBoarding(false))}>
      New Checklist
    </button>
  );
};

export default NewBtn;
