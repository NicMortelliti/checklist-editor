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
  Tag,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/uiSlice';
import { deleteItem } from '../../redux/dataSlice';
import { recursiveObjSearch } from '../../helpers/searchFunctions';

export const DeleteModal = ({ overlay }) => {
  const dispatch = useDispatch();
  const { modal, typeColors } = useSelector((state) => state.ui);
  const { data, selectedChecklistItem } = useSelector((state) => state.data);

  const { text, type, id } = recursiveObjSearch(data, selectedChecklistItem);
  console.log(text, type, id);

  const handleCancel = () => dispatch(setModal(''));
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(setModal(''));
    dispatch(deleteItem(selectedChecklistItem));
  };

  const TypeTag = () => {
    // Capitalize first character in string
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    return (
      <Tag size='sm' borderRadius='full' colorScheme={typeColors[type]}>
        {capitalizedType}
      </Tag>
    );
  };

  return (
    <Modal isOpen={modal} onClose={() => handleCancel()} isCentered>
      <ModalContent>
        {overlay}
        <ModalContent>
          <ModalHeader>Delete This Item?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider />
            <HStack my='10px'>
              <Flex align='center'>
                <TypeTag />
                <Text ml='10px'> {text.slice(0, 25)}</Text>
              </Flex>
            </HStack>
            <Divider mb='20px' />
            <Container centerContent>
              <Text mb='20px'>
                Deleting this item will delete this row and its child rows. Are
                you sure you want to delete it?
              </Text>
              <Text color='red'>This cannot be undone.</Text>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Text fontSize='xs'>Item ID: {id}</Text>
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
