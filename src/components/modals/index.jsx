import { useSelector } from 'react-redux';
import { DeleteModal } from './DeleteModal';
import { ModalOverlay } from '@chakra-ui/react';

export const ModalConductor = () => {
  const { modal } = useSelector((state) => state.ui);

  const Overlay = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  switch (modal) {
    case 'delete':
      return <DeleteModal overlay={<Overlay />} />;
    default:
      break;
  }
};
