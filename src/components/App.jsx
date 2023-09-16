import { useMemo } from 'react';
import { ProjectSelect } from './projectSelect/ProjectSelect';
import { EditingInterface } from './edit/EditingInterface';
import { useSelector } from 'react-redux';
import { ModalConductor } from './modals';

export const App = () => {
  const { isOnBoarding } = useSelector((state) => state.ui);

  const RenderInterface = useMemo(() => {
    if (isOnBoarding) {
      return <ProjectSelect />;
    } else {
      return <EditingInterface />;
    }
  }, [isOnBoarding]);

  return (
    <>
      {RenderInterface}
      <ModalConductor />
    </>
  );
};
