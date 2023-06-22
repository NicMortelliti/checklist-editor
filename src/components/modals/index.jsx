import { useSelector } from 'react-redux';
import { DeleteModal } from './DeleteModal';
import { EditModal } from './EditModal';
import { ModalOverlay } from '@chakra-ui/react';

export const ModalConductor = () => {
  const { modal } = useSelector((state) => state.ui);

  const Overlay = () => (
    <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
  );

  switch (modal) {
    case 'delete':
      return <DeleteModal overlay={<Overlay />} />;
    case 'edit':
      return <EditModal overlay={<Overlay />} />;
    default:
      break;
  }
};
