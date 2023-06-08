import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../redux/dataSlice';

const EditingInterface = () => {
  const dispatch = useDispatch();
  const { columns: defaultColumns } = useSelector((state) => state.ui);
  const { data } = useSelector((state) => state.data);
  const EditableContext = React.createContext(null);

  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    required,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({
          ...record,
          ...values,
        });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
              required: required,
              message: `${title} is required.`,
            },
          ]}>
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className='editable-cell-value-wrap'
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}>
          {children}
        </div>
      );
    }
    return <td {...restProps}>{childNode}</td>;
  };

  const handleSave = (row) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    dispatch(updateData(newData));
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        required: col.required,
        handleSave,
      }),
    };
  });

  return (
    <Table
      components={components}
      rowKey='id'
      bordered
      dataSource={data}
      columns={columns}
      pagination={false}
      rowClassName={() => 'editable-row'}
    />
  );
};

export default EditingInterface;
