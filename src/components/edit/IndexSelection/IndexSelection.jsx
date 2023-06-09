import { useSelector, useDispatch } from 'react-redux';
import { setSelectedIndex } from '../../../redux/uiSlice';

const IndexSelection = () => {
  const { indexes } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const RenderIndexes = () =>
    indexes.map((eachIndex) => {
      return (
        <button
          key={eachIndex.key}
          onClick={() => dispatch(setSelectedIndex(eachIndex))}>
          {eachIndex.text}
        </button>
      );
    });

  return <RenderIndexes />;
};

export default IndexSelection;
