import { useDispatch } from 'react-redux';
import { setOnBoarding } from '../../redux/uiSlice';
import {
  importFromJsonStart,
  importFromJsonSuccess,
  importFromJsonFailure,
} from '../../redux/dataSlice';

export const ImportBtn = () => {
  const dispatch = useDispatch();

  const handleFileUpload = (file) => {
    dispatch(importFromJsonStart());

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

  return (
    <input
      type='file'
      onChange={(event) => handleFileUpload(event.target.files[0])}
    />
  );
};