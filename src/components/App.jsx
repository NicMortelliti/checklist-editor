import '../style/App.css';
import ImportComp from './projectSelect/importProject/ImportComp';
import NewComp from './projectSelect/newProject/NewComp';
import { useSelector } from 'react-redux';

function App() {
  const { onBoarding } = useSelector((state) => state.ui);

  const RenderOnboarding = () => {
    if (onBoarding) {
      return (
        <>
          <ImportComp />
          <p>OR</p>
          <NewComp />
        </>
      );
    }
  };

  return (
    <>
      <RenderOnboarding />
    </>
  );
}

export default App;
