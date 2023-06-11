import { useState } from 'react';
import SubIndexSelection from './SubIndexSelection';
import SubIndexAddBtn from './SubIndexAddBtn';
import { NewSubIndexForm } from './NewSubIndexForm';

const SubIndexComp = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      <h2>SubIndex</h2>
      <SubIndexSelection />
      <SubIndexAddBtn setFormIsOpen={setFormIsOpen} />
      {formIsOpen && <NewSubIndexForm setFormIsOpen={setFormIsOpen} />}
    </>
  );
};

export default SubIndexComp;
