import { useDispatch } from 'react-redux';
import { useGetSubIndexes } from '../../hooks/getItems';
import { setSelectedSubIndex } from '../../../redux/dataSlice';

export const SubIndexSelection = () => {
  const dispatch = useDispatch();
  const subIndexes = useGetSubIndexes();

  return subIndexes.map((subIndex) => (
    <button
      key={subIndex.id}
      onClick={() => dispatch(setSelectedSubIndex(subIndex))}>
      {subIndex.text}
    </button>
  ));
};
