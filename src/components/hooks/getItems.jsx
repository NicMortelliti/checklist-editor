import { useSelector } from 'react-redux';

export const useGetIndexes = () => {
  const { data } = useSelector((state) => state.data);
  const result = data.filter((eachItem) => eachItem.type === 'index');
  return result;
};

export const useGetSubIndexes = () => {
  const { data, selectedIndex } = useSelector((state) => state.data);
  const parentIndex = data.find((each) => each.id === selectedIndex.id);

  const result = parentIndex.children.filter(
    (eachItem) => eachItem.type === 'sub-index'
  );

  return result;
};
