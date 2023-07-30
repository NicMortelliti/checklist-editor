import { Box, Icon, Td, Tr } from '@chakra-ui/react';
import { RxMinus, RxPlus } from 'react-icons/rx';
import { VscBlank } from 'react-icons/vsc';
import { ActionComp } from '../actions/ActionComp';
import { TypeTag } from '../../shared/TypeTag';

const maxLineLength = 30;

export const TableDataRow = ({
  index,
  lengthOfArray,
  row,
  level,
  isExpanded,
  onClick,
}) => {
  const indentStyles = {
    paddingLeft: `${level * 1}rem`, // Indentation based on level
  };

  // Destructure available props
  const {
    text,
    type,
    children,
    responseText,
    extensionText,
    casMessage,
    autoSensed,
    invertSensed,
    autoReset,
    timerSec,
    sensedTimer,
    synopticLink,
  } = row;

  // Render an expand/collapse icon if the row has children.
  const RenderIcon = () => {
    if (children.length > 0) {
      if (isExpanded) {
        return <Icon as={RxMinus} mr='8px' />;
      }
      return <Icon as={RxPlus} mr='8px' />;
    }
    return <Icon as={VscBlank} mr='8px' />;
  };

  // The text cell has a little more complexity. Here, we're adding
  // the ability to click the title cell to toggle child visibility.
  const TextCell = () => {
    const textArray: string[] = text.split('\n');
    const extensionArray: string[] = extensionText.split('\n');

    const FormattedLine = (line) => {
      const numberOfEllipses = maxLineLength - line.length - response.length;
      return line + '.'.repeat(numberOfEllipses) + response;
    };

    const RenderItem = () => {
      const FirstLine = (line: string) => (
        <>
          <RenderIcon />
          {line}
        </>
      );

      const OtherLine = (line: string) => (
        <>
          <Icon as={VscBlank} mr='8px' />
          {line}
        </>
      );
      return textArray.map((line, index) => {
        <p key={line + index.toString}>
          {index === 0 ? (
            <FirstLine line={line} />
          ) : index === textArray.length - 1 && responseText ? (
            <FormattedLine />
          ) : (
            <OtherLine line={line} />
          )}
        </p>;
      });
    };

    return (
      <Box
        onClick={onClick}
        _hover={{ bg: 'gray.100', cursor: 'pointer' }}
        style={indentStyles}>
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
      <Td>{casMessage}</Td>
      <Td>{autoSensed}</Td>
      <Td>{invertSensed}</Td>
      <Td>{autoReset}</Td>
      <Td>{timerSec}</Td>
      <Td>{sensedTimer}</Td>
      <Td>{synopticLink}</Td>
    </Tr>
  );
};
