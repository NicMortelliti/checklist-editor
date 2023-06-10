import React from 'react';

export const NewIndexForm = (setFormIsOpen) => {
  return (
    <form>
      <label htmlFor='indexTitle'>Index Title</label>
      <input type='text' name='indexTitle' />
      <button onClick={() => setFormIsOpen(false)}>Cancel</button>
    </form>
  );
};
