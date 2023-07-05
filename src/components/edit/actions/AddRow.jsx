import { IconButton, Tooltip } from '@chakra-ui/react';
import { MdFormatListBulletedAdd } from 'react-icons/md';

const label = 'Add new row';

export const AddRow = ({ objData }) => {
  return (
    <Tooltip hasArrow label={label} aria-label={label}>
      <IconButton
        icon={<MdFormatListBulletedAdd />}
        size='xs'
        mr='5px'
        variant='green'
      />
    </Tooltip>
  );
};
