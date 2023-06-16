import { Delete } from './Delete';
import { MoveRow } from './MoveRow';
import { AddRow } from './AddRow';

export const ActionComp = ({ objData }) => {
  return (
    <>
      <MoveRow objData={objData} />
      <AddRow objData={objData} />
      <Delete objData={objData} />
    </>
  );
};
