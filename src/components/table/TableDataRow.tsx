import React from 'react';
import { Box, Icon, Td, Tr } from '@chakra-ui/react';
import { VscBlank } from 'react-icons/vsc';
import { ActionComp } from '../edit/actions/ActionComp';
import { TypeTag } from '../shared/TypeTag';
import { IRow } from '../../schema';
import { formattedText } from './textColumn/formattedText';
import { firstLineText } from './textColumn/firstLineText';

interface Props {
  index: number;
  lengthOfArray: number;
  row: IRow;
  level: number;
  isExpanded: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const TableDataRow: React.FC<Props> = (props) => {
  const { index, lengthOfArray, row, level, isExpanded, onClick } = props;

  // Indentation based on level
  const indentStyles = { paddingLeft: `${level * 1}rem` };

  // Destructure available props
  const { text, type, children, responseText } = row;

  // The text cell has a little more complexity. Here, we're adding
  // the ability to click the title cell to toggle child visibility.
  const TextCell = () => {
    const textArray: string[] = text.split('\n');
    // const extensionArray: string[] = extensionText?.split('\n') || [];

    const RenderItem = () => {
      const OtherLine: React.FC<{ line: string }> = ({ line }) => (
        <>
          <Icon as={VscBlank} mr='8px' />
          {line}
        </>
      );
      return textArray.map((line, index) => (
        <p key={line + index.toString}>
          {index === 0 ? (
            <>{firstLineText({ line: line, children: children, isExpanded: isExpanded })}</>
          ) : index === textArray.length - 1 && responseText ? (
            <>{formattedText({ line: line, responseText: responseText })}</>
          ) : (
            <OtherLine line={line} />
          )}
        </p>
      ));
    };

    return (
      <Box onClick={onClick} _hover={{ bg: 'gray.100', cursor: 'pointer' }} style={indentStyles}>
        <RenderItem />
      </Box>
    );
  };

  return (
    <Tr>
      <Td>
        <ActionComp objData={row} index={index} lengthOfArray={lengthOfArray} />
      </Td>
      <Td>
        <TextCell />
      </Td>
      <Td>
        <TypeTag type={type} />
      </Td>
    </Tr>
  );
};
