import { useSelector } from 'react-redux';

const getIndexObj = (data, selectedId) =>
  data.find((eachIndex) => eachIndex.id === selectedId);

export const useGetIndexes = () => {
  const { data } = useSelector((state) => state.data);
  const result = data.filter((eachItem) => eachItem.type === 'index');
  return result;
};

export const useGetSubIndexes = () => {
  const { data, selectedIndex } = useSelector((state) => state.data);
  const parentIndex = getIndexObj(data, selectedIndex.id);
  const result = parentIndex.children.filter(
    (eachItem) => eachItem.type === 'sub-index'
  );

  return result;
};

export const useGetChecklistItems = () => {
  const { data, selectedIndex, selectedSubIndex } = useSelector(
    (state) => state.data
  );

  const parentIndexObj = getIndexObj(data, selectedIndex.id);
  const parentSubIndexObj = getIndexObj(
    parentIndexObj.children,
    selectedSubIndex.id
  );

  const checklistItems = parentSubIndexObj.children;

  return checklistItems;
};
