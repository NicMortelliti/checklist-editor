import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import { useDispatch } from 'react-redux';
import {
  importFromJsonStart,
  importFromJsonSuccess,
  importFromJsonFailure,
} from '../../../redux/dataSlice';

const ImportBtn = () => {
  const dispatch = useDispatch();

  const handleFileUpload = (file) => {
    dispatch(importFromJsonStart());

    // Read the JSON file
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        dispatch(importFromJsonSuccess(jsonData));
        message.success('JSON file uploaded successfully!');
      } catch (error) {
        dispatch(importFromJsonFailure(error.message));
        message.error('Error parsing JSON file.');
      }
    };

    reader.readAsText(file);
  };

  return (
    <Upload
      accept='.json'
      beforeUpload={handleFileUpload}
      showUploadList={false}>
      <Button icon={<UploadOutlined />}>Import Checklist (JSON)</Button>
    </Upload>
  );
};

export default ImportBtn;
