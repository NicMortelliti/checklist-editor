export const addSubIndex = (data, id, payload, template) => {
  const indexOfSelectedIndex = data.findIndex((each) => each.id === id);

  const newItem = {
    ...template,
    ...payload,
    type: 'sub-index',
    id: uuid(),
  };

  const updatedData = data.map((item, index) => {
    if (index === indexOfSelectedIndex) {
      return {
        ...item,
        children: [...item.children, newItem],
      };
    }
    return item;
  });

  return updatedData;
};
