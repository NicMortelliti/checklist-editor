import { searchById } from '../helpers/searchFunctions';

export const deleteItemFromData = (items, id) => {
  const newItemsArray = items.map((item) => ({ ...item }));
  let currentArray = newItemsArray;
  const indexOfItem = searchById(items, id);
  const lastArrayIndex = indexOfItem[indexOfItem.length - 1];

  indexOfItem.slice(0, -1).forEach((eachArrayIndex) => {
    currentArray = currentArray[eachArrayIndex].children = currentArray[
      eachArrayIndex
    ].children.map((child) => ({ ...child }));
  });

  currentArray.splice(lastArrayIndex, 1);

  return newItemsArray;
};
