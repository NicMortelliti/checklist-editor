import { useSelector } from 'react-redux';
import { DeleteModal } from './DeleteModal';

export const ModalConductor = () => {
  const { modal } = useSelector((state) => state.ui);

  switch (modal) {
    case 'delete':
      return <DeleteModal />;
    default:
      break;
  }
};
