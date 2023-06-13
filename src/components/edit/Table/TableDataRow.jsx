import React from 'react';
import { Box, Td } from '@chakra-ui/react';

export const TableDataRow = ({ row, level, isExpanded, onClick }) => {
  const indentStyles = {
    paddingLeft: `${level * 2}rem`, // Indentation based on level
  };

  return (
    <Box
      as='tr'
      onClick={onClick}
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
      <Td>
        <Box style={indentStyles}>{row.text}</Box>
      </Td>
      <Td>{row.type}</Td>
      <Td>{row.cas_message}</Td>
      <Td>{row.latchable}</Td>
      <Td>{row.auto_sensed_bool}</Td>
      <Td>{row.invert_sensed_bool}</Td>
      <Td>{row.auto_reset_bool}</Td>
      <Td>{row.timer_sec}</Td>
      <Td>{row.sensed_timer_bool}</Td>
      <Td>{row.sensed_timer_bool}</Td>
      <Td>{row.synoptic_link}</Td>
    </Box>
  );
};
