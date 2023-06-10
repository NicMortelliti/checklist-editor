import { useDispatch } from 'react-redux';
import { setSelectedIndex } from '../../../redux/dataSlice';
import { useGetIndexes } from '../../hooks/getItemsByType';

const IndexSelection = () => {
  const dispatch = useDispatch();

  const RenderIndexes = () => {
    const indexes = useGetIndexes();

    return indexes.map((index) => {
      return (
        <button
          key={index.key}
          onClick={() => dispatch(setSelectedIndex(index))}>
          {index.text}
        </button>
      );
    });
  };

  return <RenderIndexes />;
};

export default IndexSelection;
