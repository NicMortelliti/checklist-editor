import { useGetChecklistItems } from '../../hooks/getItems';

export const ChecklistItems = () => {
  const checklistItems = useGetChecklistItems();
  return checklistItems.map((checklistItem) => (
    <button
      key={checklistItem.id}
      onClick={() => console.log(checklistItem.text)}>
      {checklistItem.text}
    </button>
  ));
};
