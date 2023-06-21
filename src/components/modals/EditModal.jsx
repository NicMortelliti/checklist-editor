import {
  Button,
  Container,
  Divider,
  HStack,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Select,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/uiSlice';
import { deleteItem } from '../../redux/dataSlice';

export const EditModal = ({ overlay }) => {
  const dispatch = useDispatch();
  const { modal, typeColors } = useSelector((state) => state.ui);
  const { data, cas, selectedChecklistItem } = useSelector(
    (state) => state.data
  );

  const handleCancel = () => dispatch(setModal(''));
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(setModal(''));
    dispatch(deleteItem(selectedChecklistItem));
  };

  // Get types from UI slice and render each as a type option
  // TODO Need to prevent the selection of invalid types, e.g. disable msli-child if msli-parent is not present
  const TypeOptions = () => {
    const typesArray = Object.keys(typeColors);
    return (
      <FormControl>
        <FormLabel>Type</FormLabel>
        <Select>
          {typesArray.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  // Get CAS messages from data slice and render each as an option
  const CasOptions = () => {
    return (
      <FormControl>
        <FormLabel>CAS Message</FormLabel>
        <AutoComplete openOnFocus>
          <AutoCompleteInput variant='filled' />
          <AutoCompleteList>
            {cas.map((msg) => (
              <AutoCompleteItem
                key={`option-${msg.id}`}
                value={msg.id}
                textTransform='capitalize'>
                {msg.text} - {msg.type}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
    );
  };

  return (
    <Modal isOpen={modal} onClose={() => handleCancel()} isCentered>
      <ModalContent>
        {overlay}
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Text</FormLabel>
              <Input placeholder='Title/Challenge' />
            </FormControl>
            <TypeOptions />
            <CasOptions />
          </ModalBody>
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
