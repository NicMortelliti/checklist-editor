import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setOnBoarding } from '../../redux/uiSlice';
import {
  importFromJsonStart,
  importFromJsonSuccess,
  importFromJsonFailure,
} from '../../redux/dataSlice';
import { Button } from '@chakra-ui/react';
import { LuFolderOpen } from 'react-icons/lu';

export const ImportBtn = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    dispatch(importFromJsonStart());
    const file = e.target.files[0];

    // Read the JSON file
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result); // Use e.target.result instead of e.target.files
        dispatch(importFromJsonSuccess(jsonData));
        dispatch(setOnBoarding(false));
      } catch (error) {
        dispatch(importFromJsonFailure(error.message));
      }
    };

    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Button
        leftIcon={<LuFolderOpen />}
        aria-label='Open Checklist'
        onClick={handleButtonClick}>
        Open Existing Checklist
      </Button>
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
    </>
  );
};
