import { useDispatch } from 'react-redux';
import { useGetIndexes } from '../../hooks/getItems';
import { setSelectedIndex } from '../../../redux/dataSlice';

const IndexSelection = () => {
  const dispatch = useDispatch();
  const indexes = useGetIndexes();

  return indexes.map((index) => (
    <button key={index.id} onClick={() => dispatch(setSelectedIndex(index))}>
      {index.text}
    </button>
  ));
};

export default IndexSelection;
