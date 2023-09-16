import { Icon } from '@chakra-ui/react';
import { RxMinus, RxPlus } from 'react-icons/rx';
import { VscBlank } from 'react-icons/vsc';

interface IProps {
  line: string;
  children: object[];
  isExpanded: boolean;
}

export const FirstLineText: React.FC<IProps> = ({ line, children, isExpanded }) => {
  // Determine what icon to display (e.g. expand/collapse/none)
  const icon = () => {
    if (children.length > 0) {
      if (isExpanded) return <Icon as={RxMinus} mr='8px' />;
      return <Icon as={RxPlus} mr='8px' />;
    }
    return <Icon as={VscBlank} mr='8px' />;
  };

  // Render line with icon
  return (
    <>
      {icon()}
      {line}
    </>
  );
};
