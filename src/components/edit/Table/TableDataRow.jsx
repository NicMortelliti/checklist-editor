import { Box, Td } from '@chakra-ui/react';

export const TableDataRow = ({ row, level, onClick }) => {
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
  } = row;

  return (
    <Box
      as='tr'
      onClick={onClick}
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
      <Td>
        <Box style={indentStyles}>{text}</Box>
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
    </Box>
  );
};
