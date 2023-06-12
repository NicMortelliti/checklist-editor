import { ProjectSelect } from './projectSelect/ProjectSelect';
import { EditingInterface } from './edit/EditingInterface';
import { useSelector } from 'react-redux';

export const App = () => {
  const { onBoarding } = useSelector((state) => state.ui);
  const { selectedIndex, selectedSubIndex } = useSelector(
    (state) => state.data
  );

  const RenderInterface = () => {
    if (onBoarding) return <ProjectSelect />;
    return <EditingInterface />;
  };

  return (
    <>
      <p>{`Index: ${selectedIndex.text}, ${selectedIndex.id}`}</p>
      <p>{`SubIndex: ${selectedSubIndex.text}, ${selectedSubIndex.id}`}</p>
      <RenderInterface />
    </>
  );
};
