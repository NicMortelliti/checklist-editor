import { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/uiSlice';
import { recursiveObjSearch } from '../../helpers/searchFunctions';

export const EditModal = ({ overlay }) => {
  const initialForm = {
    text: '',
    response_text: '',
    extension_text: '',
    type: '-',
    cas_message: '-',
    latchable: 'False',
    auto_sensed_bool: 'False',
    invert_sensed_bool: false,
    auto_reset_bool: 'False',
    timer_sec: '',
    sensed_timer_bool: 'False',
    synoptic_link: '',
  };

  const dispatch = useDispatch();
  const { modal, typeColors } = useSelector((state) => state.ui);
  const { cas, data, selectedChecklistItem, synoptics } = useSelector(
    (state) => state.data
  );

  const [formData, setFormData] = useState(initialForm);

  // Get data from selected row and populate formData
  useEffect(() => {
    const rowData = recursiveObjSearch(data, selectedChecklistItem);
    if (rowData) {
      setFormData({ ...formData, ...rowData });
    }
  }, []);

  const handleCancel = () => dispatch(setModal(''));
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    // dispatch(setModal(''));
    // dispatch(deleteItem(selectedChecklistItem));
  };

  const textChallenge = () => {
    return (
      <FormControl isRequired>
        <FormLabel>Text</FormLabel>
        <Input
          placeholder='Title/Challenge'
          name='text'
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />
      </FormControl>
    );
  };

  // Get types from UI slice and render each as a type option
  // TODO Need to prevent the selection of invalid types, e.g. disable msli-child if msli-parent is not present
  const typeOptions = () => {
    const typesArray = Object.keys(typeColors);
    return (
      <FormControl isRequired>
        <FormLabel>Type</FormLabel>
        <Select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
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
  const casOptions = () => (
    <FormControl>
      <FormLabel>CAS Message</FormLabel>
      <Select
        value={formData.auto_reset_bool}
        onChange={(e) =>
          setFormData({ ...formData, auto_reset_bool: e.target.value })
        }>
        {cas.map((msg) => {
          const { id, text, type } = msg;
          return (
            <option
              key={id}
              value={text}
              label={`${text} ${type && `(${type})`}`}>
              {text} {type && `(${type})`}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );

  const latchableOptions = () => {
    const optionsArray = ['True', 'False'];
    return (
      <FormControl>
        <FormLabel>Latchable</FormLabel>
        <Select
          value={formData.latchable}
          onChange={(e) =>
            setFormData({ ...formData, latchable: e.target.value })
          }>
          {optionsArray.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  const autoSensedOptions = () => {
    const optionsArray = ['True', 'False'];
    return (
      <FormControl>
        <FormLabel>Auto Sensed</FormLabel>
        <Flex>
          <Select
            w='40%'
            mr='20px'
            value={formData.auto_sensed_bool}
            onChange={(e) =>
              setFormData({ ...formData, auto_sensed_bool: e.target.value })
            }>
            {optionsArray.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Checkbox
            isDisabled={formData.auto_sensed_bool === 'True' ? false : true}
            value={formData.invert_sensed_bool}
            onChange={(e) =>
              setFormData({ ...formData, invert_sensed_bool: e.target.value })
            }>
            Invert Auto Sensed?
          </Checkbox>
        </Flex>
      </FormControl>
    );
  };

  const autoResetOptions = () => {
    const optionsArray = ['True', 'False'];
    return (
      <FormControl>
        <FormLabel>Auto Reset</FormLabel>
        <Select
          value={formData.auto_reset_bool}
          onChange={(e) =>
            setFormData({ ...formData, auto_reset_bool: e.target.value })
          }>
          {optionsArray.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  const timer = () => {
    return (
      <FormControl>
        <FormLabel>Timer</FormLabel>
        <InputGroup>
          <Input
            w='25%'
            name='timer'
            value={formData.timer_sec}
            onChange={(e) =>
              setFormData({ ...formData, timer_sec: e.target.value })
            }
          />
          <InputRightAddon w='15%' mr='20px'>
            sec
          </InputRightAddon>
          <Checkbox isDisabled={formData.timer_sec ? false : true}>
            Sensed Timer?
          </Checkbox>
        </InputGroup>
      </FormControl>
    );
  };

  const synopticLink = () => {
    return (
      <FormControl>
        <FormLabel>Synoptic Link</FormLabel>
        <Select
          value={formData.auto_reset_bool}
          onChange={(e) =>
            setFormData({ ...formData, synoptic_link: e.target.value })
          }>
          {synoptics.map((synoptic) => {
            const { id, name } = synoptic;
            return (
              <option key={id} value={name} label={formData.synoptic_link}>
                {name}
              </option>
            );
          })}
        </Select>
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
          <form onSubmit={(e) => submitForm(e)}>
            <ModalBody>
              {textChallenge()}
              {typeOptions()}
              {casOptions()}
              {latchableOptions()}
              {autoSensedOptions()}
              {autoResetOptions()}
              {timer()}
              {synopticLink()}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type='submit'>
                Submit
              </Button>
              <Button variant='ghost' onClick={() => handleCancel()}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalContent>
    </Modal>
  );
};
