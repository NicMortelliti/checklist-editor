import { useSelector } from 'react-redux';

const SubIndexSelection = () => {
  const { subIndexes } = useSelector((state) => state.data);
  const RenderSubIndexes = () => {
    subIndexes.map((eachSubIndex) => {
      <button>{eachSubIndex.text}</button>;
    });
  };

  return <RenderSubIndexes />;
};

export default SubIndexSelection;
