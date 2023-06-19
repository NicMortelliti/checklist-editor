import { v4 as uuid } from 'uuid';

export const addUuid = (items) =>
  items.map((item) => {
    const newItem = { ...item, id: uuid() };
    if (newItem.children && newItem.children.length > 0) {
      newItem.children = addUuid(newItem.children);
    }
    return newItem;
  });
