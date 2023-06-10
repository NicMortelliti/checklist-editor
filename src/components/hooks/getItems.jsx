import { useSelector } from 'react-redux';

export const useGetIndexes = () => {
  const { data } = useSelector((state) => state.data);
  const result = data.filter((eachItem) => eachItem.type === 'index');
  return result;
};

export const useGetSubIndexes = (parentIndex) => {
  const result = parentIndex.children.filter(
    (eachItem) => eachItem.type === 'sub-index'
  );
  return result;
};
