import { List } from 'antd';
import { useSelector } from 'react-redux';

const SubIndexSelection = () => {
  const { subIndexes } = useSelector((state) => state.data);
  return (
    <List
      header={<>Sub-Indexes</>}
      bordered
      dataSource={subIndexes}
      renderItem={(item) => <List.Item>{item.text}</List.Item>}
    />
  );
};

export default SubIndexSelection;
