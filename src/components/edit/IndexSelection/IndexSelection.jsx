import { List } from 'antd';
import { useSelector } from 'react-redux';

const IndexSelection = () => {
  const { indexes } = useSelector((state) => state.data);
  return (
    <List
      header={<>Indexes</>}
      bordered
      dataSource={indexes}
      renderItem={(item) => <List.Item>{item.text}</List.Item>}
    />
  );
};

export default IndexSelection;
