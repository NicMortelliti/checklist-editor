import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redux/uiSlice';
import { deleteItem } from '../../../redux/dataSlice';

export const DeleteModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const { selectedChecklistItem } = (state) => state.data;

  const handleCancel = () => dispatch(setModal(''));
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(setModal(''));
    dispatch(deleteItem(selectedChecklistItem));
  };

  return (
    <Modal isOpen={modal} onClose={() => handleCancel()} isCentered>
      <ModalContent>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to delete this item? Its children items will
              also be deleted.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={(e) => handleDelete(e)}>
              Delete
            </Button>
            <Button variant='ghost' onClick={() => handleCancel()}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalContent>
    </Modal>
  );
};
