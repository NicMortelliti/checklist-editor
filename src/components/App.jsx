import '../style/App.css';
import ImportComp from './importProject/ImportComp';
import NewComp from './newProject/NewComp';

function App() {
  return (
    <>
      <ImportComp />
      <p>OR</p>
      <NewComp />
    </>
  );
}

export default App;
