import {
  Button,
  Container,
  Divider,
  HStack,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/uiSlice';
import { deleteItem } from '../../redux/dataSlice';
import { TypeTag } from '../shared/TypeTag';

export const EditModal = ({ overlay }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const { data, selectedChecklistItem } = useSelector((state) => state.data);

  const handleCancel = () => dispatch(setModal(''));
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(setModal(''));
    dispatch(deleteItem(selectedChecklistItem));
  };

  return (
    <Modal isOpen={modal} onClose={() => handleCancel()} isCentered>
      <ModalContent>
        {overlay}
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={(e) => handleDelete(e)}>
              Submit
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
