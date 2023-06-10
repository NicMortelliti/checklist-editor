import { useGetSubIndexes } from '../../hooks/getItems';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubIndex } from '../../../redux/dataSlice';

const SubIndexAddBtn = () => {
  const dispatch = useDispatch();
  const { selectedIndex } = useSelector((state) => state.data);
  const subIndexes = useGetSubIndexes(selectedIndex);

  const RenderSubIndexes = () =>
    subIndexes.map((subIndex) => (
      <button
        key={subIndex.id}
        onClick={() => dispatch(setSelectedSubIndex(subIndex))}>
        {subIndex.text}
      </button>
    ));

  return <RenderSubIndexes />;
};

export default SubIndexAddBtn;
