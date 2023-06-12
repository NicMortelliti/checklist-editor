import { Table } from 'antd';
import { useSelector } from 'react-redux';

export const EditingInterface = () => {
  const { selectedIndex, selectedSubIndex } = useSelector(
    (state) => state.data
  );

  const RenderPage = () => {
    if (selectedSubIndex) {
      return <ChecklistComp />;
    } else if (selectedIndex) {
      return <SubIndexComp />;
    } else {
      return <IndexComp />;
    }
  };

  return <RenderPage />;
};
