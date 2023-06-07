import IndexSelection from './IndexSelection';
import IndexAddBtn from './IndexAddBtn';
import { List } from 'antd';

const IndexComp = () => {
  return (
    <List.Item>
      <IndexSelection />
      <IndexAddBtn />
    </List.Item>
  );
};

export default IndexComp;
