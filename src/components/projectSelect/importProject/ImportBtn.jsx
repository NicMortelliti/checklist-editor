import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';

const ImportBtn = () => {
  const props = {
    name: 'file',
    beforeUpload: (file) => {
      const isJSON = file.type === 'application/json';
      if (!isJSON) {
        message.error(`${file.name} is not a json file`);
      }
      return isJSON || Upload.LIST_IGNORE;
    },
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  };

  console.log(props.file);

  return (
    <Upload {...props} maxCount={1} accept='.json'>
      <Button icon={<UploadOutlined />}>Import Checklist (JSON)</Button>
    </Upload>
  );
};

export default ImportBtn;
