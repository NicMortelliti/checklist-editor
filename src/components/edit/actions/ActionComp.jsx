import { Delete } from './Delete';
import { MoveRow } from './MoveRow';
import { AddRow } from './AddRow';
import { EditRow } from './EditRow';

export const ActionComp = ({ objData, index, lengthOfArray }) => {
  return (
    <>
      <MoveRow objData={objData} index={index} lengthOfArray={lengthOfArray} />
      <EditRow objData={objData} />
      <AddRow objData={objData} />
      <Delete objData={objData} />
    </>
  );
};
