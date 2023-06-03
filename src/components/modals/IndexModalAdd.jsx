import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedModal } from '../../redux/uiSlice';

const IndexModalAdd = () => {
  const dispatch = useDispatch();
  const { openedModalName } = useSelector((state) => state.ui);
  const isOpen = openedModalName === 'indexModalAdd';

  const handleCancel = () => {
    dispatch(setOpenedModal(''));
  };

  return (
    <Modal open={isOpen} onCancel={() => handleCancel()}>
      IndexModalAdd
    </Modal>
  );
};

export default IndexModalAdd;
