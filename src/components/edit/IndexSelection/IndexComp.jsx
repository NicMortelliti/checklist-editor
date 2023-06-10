import { useState } from 'react';
import IndexSelection from './IndexSelection';
import IndexAddBtn from './IndexAddBtn';
import { NewIndexForm } from './NewIndexForm';

const IndexComp = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      <h2>Indexes</h2>
      <IndexSelection />
      <IndexAddBtn setFormIsOpen={setFormIsOpen} />
      {formIsOpen && <NewIndexForm setFormIsOpen={setFormIsOpen} />}
    </>
  );
};

export default IndexComp;
