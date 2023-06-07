import SubIndexSelection from './SubIndexSelection';
import SubIndexAddBtn from './SubIndexAddBtn';
import { List } from 'antd';

const SubIndexComp = () => {
  return (
    <List.Item>
      <SubIndexSelection />
      <SubIndexAddBtn />
    </List.Item>
  );
};

export default SubIndexComp;
