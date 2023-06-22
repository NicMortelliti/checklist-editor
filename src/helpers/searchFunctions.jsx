// Return the object that has a matching ID
export const recursiveObjSearch = (dataSet, id) => {
  const recursiveSearch = (dataArray, id) => {
    for (const obj of dataArray) {
      if (obj.id === id) {
        return obj;
      }

      if (obj.children && obj.children.length > 0) {
        const result = recursiveSearch(obj.children, id);
        if (result) {
          return result;
        }
      }
    }

    return null;
  };

  const result = recursiveSearch(dataSet, id);

  return result;
};

// Return the array address to the object with a matching ID
export const searchById = (dataArray, id) => {
  // Recursive function to search for id in dataArray
  function search(dataArray, id, indexPath = []) {
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i].id === id) {
        return [...indexPath, i]; // Return the index path if id is found
      } else if (dataArray[i].children && dataArray[i].children.length > 0) {
        const childIndexPath = [...indexPath, i];
        const result = search(dataArray[i].children, id, childIndexPath); // Recursively search in children arrays
        if (result !== null) {
          return result; // Return the result if id is found in children
        }
      }
    }
    return null; // Return null if id is not found
  }

  // Start the search
  return search(dataArray, id);
};
