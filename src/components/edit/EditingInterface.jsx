import { useSelector } from 'react-redux';
import { IndexComp } from './IndexSelection/IndexComp';
import { SubIndexComp } from './SubIndexSelection/SubIndexComp';
import { ChecklistComp } from './Checklist/ChecklistComp';
import { TableComp } from './Table/TableComp';

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

  return (
    <>
      <RenderPage />
      <TableComp />
    </>
  );
};
