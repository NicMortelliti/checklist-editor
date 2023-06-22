export const editItemInDataArray = (data, id, editItem) => {
  // Use map to create a new array with the updated object
  const updatedData = data.map((obj) => {
    if (obj.id === id) {
      // Update the fields of the matching object using the spread operator
      return { ...obj, ...editItem };
    }

    if (obj.children && obj.children.length > 0) {
      // Recursively call the function for child objects
      return {
        ...obj,
        children: editItemInDataArray(obj.children, id, editItem),
      };
    }

    return obj;
  });

  return updatedData;
};
