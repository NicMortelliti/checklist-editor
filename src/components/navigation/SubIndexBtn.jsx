import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubIndex } from '../../redux/dataSlice';

export const SubIndexBtn = () => {
  const dispatch = useDispatch();
  const { selectedSubIndex } = useSelector((state) => state.data);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedSubIndex(''));
  };

  return (
    selectedSubIndex && (
      <button onClick={(e) => handleClick(e)}>{selectedSubIndex.text}</button>
    )
  );
};
