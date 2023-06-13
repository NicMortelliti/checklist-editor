import { Tbody, Tr, Td } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const TableRows = () => {
  const { data } = useSelector((state) => state.data);

  const RenderRows = ({ data }) => {
    const rows = data.map((eachRow) => {
      const {
        id,
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
      } = eachRow;

      const row = (
        <Tr key={id}>
          <Td>{text}</Td>
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

      let renderedRows = [row];

      if (eachRow.children && eachRow.children.length > 0) {
        const childRows = <RenderRows key={id} data={eachRow.children} />;
        renderedRows = [...renderedRows, childRows];
      }

      return renderedRows;
    });

    return rows;
  };

  return <Tbody>{<RenderRows data={data} />}</Tbody>;
};
