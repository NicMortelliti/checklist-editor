import { Box, Icon, Select, Td, Tr } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RxMinus, RxPlus } from 'react-icons/rx';

export const TableDataRow = ({ row, level, isExpanded, onClick }) => {
  const { rowActions } = useSelector((state) => state.ui);
  const indentStyles = {
    paddingLeft: `${level * 2}rem`, // Indentation based on level
  };

  const {
    text,
    type,
    cas_message,
    latchable,
    auto_sensed_bool,
    invert_sensed_bool,
    auto_reset_bool,
    timer_sec,
    sensed_timer_bool,
    synoptic_link,
    children,
  } = row;

  const ActionSelect = () => (
    <Select size='xs' iconSize='xs' variant='filled'>
      {rowActions.map((eachAction) => (
        <option key={eachAction} value={eachAction} color='red'>
          {eachAction}
        </option>
      ))}
    </Select>
  );

  // Render an expand/collapse icon if the row
  // has children.
  const RenderIcon = () => {
    if (children.length > 0) {
      if (isExpanded) {
        return <Icon as={RxMinus} mr='8px' />;
      }
      return <Icon as={RxPlus} mr='8px' />;
    }
    return;
  };

  // The text cell has a little more complexity.
  // Here, we're adding the ability to click the title cell
  // to toggle child visibility.
  const TextCell = () => (
    <Box
      onClick={onClick}
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
      style={indentStyles}>
      <RenderIcon />
      {text}
    </Box>
  );

  return (
    <Tr>
      <Td>
        <ActionSelect />
      </Td>
      <Td>
        <TextCell />
      </Td>
      <Td>{type}</Td>
      <Td>{cas_message}</Td>
      <Td>{latchable}</Td>
      <Td>{auto_sensed_bool}</Td>
      <Td>{invert_sensed_bool}</Td>
      <Td>{auto_reset_bool}</Td>
      <Td>{timer_sec}</Td>
      <Td>{sensed_timer_bool}</Td>
      <Td>{sensed_timer_bool}</Td>
      <Td>{synoptic_link}</Td>
    </Tr>
  );
};
