import { Table } from 'antd';
import { useSelector } from 'react-redux';

const EditingInterface = () => {
  const { columns } = useSelector((state) => state.ui);
  const { data } = useSelector((state) => state.data);

  return (
    <Table
      // components={}
      rowClassName={() => 'editable-row'}
      bordered
      dataSource={data}
      columns={columns}
    />
  );
};

export default EditingInterface;
