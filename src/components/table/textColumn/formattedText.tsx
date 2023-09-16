import { MAX_LINE_LENGTH } from '../../../constants';

interface IProps {
  line: string;
  responseText: string;
}

export const formattedText = (props: IProps): string => {
  const { line, responseText } = props;

  const numberOfEllipses = MAX_LINE_LENGTH - line.length - responseText.length;
  return line + '.'.repeat(numberOfEllipses) + responseText;
};
