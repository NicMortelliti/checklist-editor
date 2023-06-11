import { useDispatch, useSelector } from 'react-redux';
import { useGetSubIndexes } from '../../hooks/getItems';
import { setSelectedSubIndex } from '../../../redux/dataSlice';

const SubIndexSelection = () => {
  const { selectedIndex } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const subIndexes = useGetSubIndexes(selectedIndex);

  return subIndexes.map((subIndex) => (
    <button
      key={subIndex.id}
      onClick={() => dispatch(setSelectedSubIndex(subIndex))}>
      {subIndex.text}
    </button>
  ));
};

export default SubIndexSelection;
