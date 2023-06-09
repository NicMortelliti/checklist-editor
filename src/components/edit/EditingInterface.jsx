import { useSelector } from 'react-redux';
import IndexComp from './IndexSelection/IndexComp';
import SubIndexComp from './SubIndexSelection/SubIndexComp';

const EditingInterface = () => {
  const { selectedIndex } = useSelector((state) => state.ui);

  const RenderPage = () => {
    switch (true) {
      case selectedIndex:
        return <SubIndexComp />;
      default:
        return <IndexComp />;
    }
  };

  return <RenderPage />;
};

export default EditingInterface;
