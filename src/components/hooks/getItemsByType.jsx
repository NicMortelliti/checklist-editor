import { useSelector } from 'react-redux';

export const useGetIndexes = () => {
  const { data } = useSelector((state) => state.data);
  const result = data.filter((eachItem) => eachItem.type === 'index');
  return result;
};
