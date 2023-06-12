import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewIndexItem } from '../../../redux/dataSlice';

export const NewIndexForm = (setFormIsOpen) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ text: '' });

  const handleChange = (e) => {
    e.preventDefault();
    setFormState({ ...formState, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    () => setFormIsOpen(false);
    dispatch(addNewIndexItem(formState));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='indexTitle'>Index Title</label>
      <input
        type='text'
        name='indexTitle'
        value={formState.text}
        onChange={(e) => handleChange(e)}
      />
      <input type='submit' value='Submit' />
      <button onClick={() => setFormIsOpen(false)}>Cancel</button>
    </form>
  );
};
