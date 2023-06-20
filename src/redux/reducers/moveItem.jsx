export const moveItemInDataArray = (data, id, direction) => {
  // Recursive function to find the object with matching id
  const findObject = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.id === id) {
        return { item, parent: arr };
      } else if (item.children.length > 0) {
        const result = findObject(item.children);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  // Create a deep copy of the data array
  const newData = JSON.parse(JSON.stringify(data));

  // Find the object to move within the newData array
  const result = findObject(newData);

  if (result) {
    const { item, parent } = result;
    const currentIndex = parent.indexOf(item);

    // Move the item up if the direction is 'up' and it is not already at the top
    if (direction === 'up' && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      parent.splice(currentIndex, 1); // Remove the item from its current position
      parent.splice(newIndex, 0, item); // Insert the item at the new position
    }
    // Move the item down if the direction is 'down' and it is not already at the bottom
    else if (direction === 'down' && currentIndex < parent.length - 1) {
      const newIndex = currentIndex + 1;
      parent.splice(currentIndex, 1); // Remove the item from its current position
      parent.splice(newIndex, 0, item); // Insert the item at the new position
    }
  }

  return newData; // Return the modified newData array
};
