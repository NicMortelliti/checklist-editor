export const moveItemInDataArray = (items, id, direction) => {
  const newItemsArray = items.map((item) => {
    if (item.id === id) {
      const { children } = item;
      let currentIndex = children.findIndex((child) => child.id === id);

      if (direction === 'up' && currentIndex > 0) {
        const itemToMove = children[currentIndex];
        children.splice(currentIndex, 1);
        children.splice(currentIndex - 1, 0, itemToMove);
      } else if (direction === 'down' && currentIndex < children.length - 1) {
        const itemToMove = children[currentIndex];
        children.splice(currentIndex, 1);
        children.splice(currentIndex + 1, 0, itemToMove);
      }
    }

    return {
      ...item,
      children: moveItemInDataArray(item.children, id, direction),
    };
  });

  return newItemsArray;
};
