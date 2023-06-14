import { Delete } from './Delete';
import { MoveRow } from './MoveRow';
import { AddRow } from './AddRow';

export const ActionComp = () => {
  return (
    <>
      <MoveRow />
      <AddRow />
      <Delete />
    </>
  );
};
