import React from 'react';
import { Box, Icon, Td, Tr } from '@chakra-ui/react';
import { VscBlank } from 'react-icons/vsc';
import { actionComp } from '../edit/actions/ActionComp';
import { typeTag } from '../shared/TypeTag';
import { IRow } from '../../schema';
import { formattedText } from './textColumn/formattedText';
import { FirstLineText } from './textColumn/FirstLineText';

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
  const textCell = () => {
    const textArray: string[] = text.split('\n');
    // const extensionArray: string[] = extensionText?.split('\n') || [];

    const renderItem = () => {
      const otherLine = (line: string) => (
        <>
          <Icon as={VscBlank} mr='8px' />
          {line}
        </>
      );
      return textArray.map((line, index) => (
        <p key={line + index.toString()}>
          {index === 0 ? (
            <FirstLineText line={line} children={children} isExpanded={isExpanded} />
          ) : index === textArray.length - 1 && responseText ? (
            formattedText({ line: line, responseText: responseText })
          ) : (
            otherLine(line)
          )}
        </p>
      ));
    };

    return (
      <Box onClick={onClick} _hover={{ bg: 'gray.100', cursor: 'pointer' }} style={indentStyles}>
        {renderItem()}
      </Box>
    );
  };

  return (
    <Tr>
      <Td>{actionComp({ objData: row, index: index, lengthOfArray: lengthOfArray })}</Td>
      <Td>{textCell()}</Td>
      <Td>{typeTag(type)} </Td>
    </Tr>
  );
};
