import { IconButton } from '@chakra-ui/react';
import { RxCross1 } from 'react-icons/rx';

export const Delete = () => {
  return <IconButton icon={<RxCross1 />} size='xs' colorScheme='red' />;
};
