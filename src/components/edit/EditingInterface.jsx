import { useSelector } from 'react-redux';
import IndexComp from './IndexSelection/IndexComp';
import SubIndexComp from './SubIndexSelection/SubIndexComp';

const EditingInterface = () => {
  const { selectedIndex } = useSelector((state) => state.data);

  const RenderPage = () => {
    if (selectedIndex) {
      return <SubIndexComp />;
    } else {
      return <IndexComp />;
    }
  };

  return <RenderPage />;
};

export default EditingInterface;
