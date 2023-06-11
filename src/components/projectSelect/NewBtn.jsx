import { setOnBoarding } from '../../redux/uiSlice';
import { useDispatch } from 'react-redux';

export const NewBtn = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setOnBoarding(false))}>
      New Checklist
    </button>
  );
};
