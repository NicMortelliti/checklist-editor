import { MAX_LINE_LENGTH } from '../../../constants';

interface IProps {
  line: string;
  responseText: string;
}

export const formattedText = ({ line, responseText }: IProps): string => {
  const numberOfEllipses = MAX_LINE_LENGTH - line.length - responseText.length;
  return line + '.'.repeat(numberOfEllipses) + responseText;
};
