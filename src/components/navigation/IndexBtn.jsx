import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndex, setSelectedSubIndex } from '../../redux/dataSlice';

export const IndexBtn = () => {
  const dispatch = useDispatch();
  const { selectedIndex } = useSelector((state) => state.data);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedIndex(''));
    dispatch(setSelectedSubIndex(''));
  };

  return (
    selectedIndex && (
      <button onClick={(e) => handleClick(e)}>{selectedIndex.text}</button>
    )
  );
};
