import NewComp from './newProject/NewComp';
import ImportComp from './importProject/ImportComp';

const ProjectSelect = () => {
  return (
    <>
      <ImportComp />
      <p>OR</p>
      <NewComp />
    </>
  );
};

export default ProjectSelect;
