import IndexComp from './IndexSelection/IndexComp';
import SubIndexComp from './SubIndexSelection/SubIndexComp';
import { List } from 'antd';

const EditingInterface = () => {
  const listArray = [<IndexComp />, <SubIndexComp />];

  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      bordered
      dataSource={listArray}
      renderItem={(item) => <List.Item>{item}</List.Item>}></List>
  );
};

export default EditingInterface;
