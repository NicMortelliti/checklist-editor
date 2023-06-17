import { Delete } from './Delete';
import { MoveRow } from './MoveRow';
import { AddRow } from './AddRow';

export const ActionComp = ({ objData, index, lengthOfArray }) => {
  return (
    <>
      <MoveRow objData={objData} index={index} lengthOfArray={lengthOfArray} />
      <AddRow objData={objData} />
      <Delete objData={objData} />
    </>
  );
};
