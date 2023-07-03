import { IconButton } from '@chakra-ui/react';
import { MdFormatListBulletedAdd } from 'react-icons/md';

export const AddRow = ({ objData }) => {
  return (
    <IconButton
      icon={<MdFormatListBulletedAdd />}
      size='xs'
      mr='5px'
      variant='green'
    />
  );
};
