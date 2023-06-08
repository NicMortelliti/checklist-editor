import { Table } from 'antd';
import { useSelector } from 'react-redux';

const EditingInterface = () => {
  const { columns } = useSelector((state) => state.ui);
  const { data } = useSelector((state) => state.data);

  console.log(data);

  return (
    <Table
      rowKey='id'
      bordered
      dataSource={data}
      columns={columns}
      pagination={false}
    />
  );
};

export default EditingInterface;
