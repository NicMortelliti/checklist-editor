import { ProjectSelect } from './projectSelect/ProjectSelect';
import { EditingInterface } from './edit/EditingInterface';
import { useSelector } from 'react-redux';
import { NavBtns } from './navigation/NavBtns';

export const App = () => {
  const { onBoarding } = useSelector((state) => state.ui);
  const RenderInterface = () => {
    if (onBoarding) return <ProjectSelect />;
    return <EditingInterface />;
  };

  return (
    <>
      <NavBtns />
      <RenderInterface />
    </>
  );
};
