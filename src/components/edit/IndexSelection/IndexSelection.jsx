import { useDispatch } from 'react-redux';
import { setSelectedIndex } from '../../../redux/dataSlice';
import { useGetIndexes } from '../../hooks/getItems';

const IndexSelection = () => {
  const dispatch = useDispatch();
  const indexes = useGetIndexes();

  const RenderIndexes = () =>
    indexes.map((index) => (
      <button key={index.id} onClick={() => dispatch(setSelectedIndex(index))}>
        {index.text}
      </button>
    ));

  return <RenderIndexes />;
};

export default IndexSelection;
