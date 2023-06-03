import '../style/App.css';
import ProjectSelect from './projectSelect/ProjectSelect';
import EditingInterface from './edit/EditingInterface';
import { useSelector } from 'react-redux';
import ModalDirector from './modals/ModalCont';

function App() {
  const { onBoarding } = useSelector((state) => state.ui);

  const RenderInterface = () => {
    if (onBoarding) return <ProjectSelect />;
    return <EditingInterface />;
  };

  return (
    <>
      <RenderInterface />
      <ModalDirector />
    </>
  );
}

export default App;
