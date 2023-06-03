import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setOpenedModal } from '../../../redux/uiSlice';

const IndexAddBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      icon={<PlusOutlined />}
      type='primary'
      onClick={() => dispatch(setOpenedModal('indexModalAdd'))}>
      Index
    </Button>
  );
};

export default IndexAddBtn;
