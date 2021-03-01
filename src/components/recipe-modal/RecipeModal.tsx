import React, { FC } from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Image from 'antd/lib/image';
import { InputNumber, Modal, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch } from 'react-redux';
import { RecipeModel } from '../../models/recipe';
import actions from '../../store/actions';
import { recipeTypes } from '../../constants/recipe-types';

import './recipe-modal.scss';
const { Option } = Select;

interface RecipeModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export const RecipeModal: FC<RecipeModalProps> = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch();
  const [formInstance] = Form.useForm();

  const handleSave = () => {
    formInstance.submit();
  };

  const onSubmit = (recipe: RecipeModel) => {
    dispatch(actions.createRecipe(recipe));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    formInstance.resetFields();
    setIsModalVisible(false);
  };

  return (
    <Modal title="New Recipe" visible={isModalVisible} onOk={handleSave} onCancel={handleCancel}>
      <Form
        name="basic"
        form={formInstance}
        className="recipe-form"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input meal name!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="ingredient-type"
          label="Type"
          name="type"
        >
          <Select>
            {
              recipeTypes.map((recipeType) => (
                <Option value={recipeType.type} className="recipe-type-option">
                  <div className="recipe-type-option-container">
                    <span>{recipeType.type}</span>
                    <Image
                      preview={false}
                      width={20}
                      src={recipeType.image}
                    /></div>
                </Option>
              ))
            }
          </Select>
        </Form.Item>


        <Form.List
          name="ingredients"
          initialValue={[
            { name: '', amount: '', unit: '' }
          ]}
        >
          {(fields, { add, remove }) => (
            <>
              {
                fields.map(field => (
                  <Space key={field.key} className="ingredient-row">
                    <Form.Item
                      className="ingredient-name"
                      {...field}
                      name={[field.name, 'name']}
                      fieldKey={[field.fieldKey, 'name']}
                      rules={[{ required: true, message: 'Missing ingredient name' }]}
                    >
                      <Input placeholder="Ingredient name" />
                    </Form.Item>

                    <Form.Item
                      className="ingredient-amount"
                      {...field}
                      name={[field.name, 'amount']}
                      fieldKey={[field.fieldKey, 'amount']}
                      rules={[{ required: true, message: 'Missing amount' }]}
                    >
                      <InputNumber placeholder="Amount" />
                    </Form.Item>

                    <Form.Item
                      className="ingredient-unit"
                      {...field}
                      name={[field.name, 'unit']}
                      fieldKey={[field.fieldKey, 'unit']}
                      rules={[{ required: true, message: 'Missing unit' }]}
                    >
                      <Select>
                        <Option value="pcs">pcs</Option>
                        <Option value="kg">kg</Option>
                        <Option value="g">g</Option>
                        <Option value="mg">mg</Option>
                        <Option value="tsp">tsp</Option>
                        <Option value="tbsp">tbsp</Option>
                        <Option value="oz">oz</Option>
                        <Option value="cup">cup</Option>
                        <Option value="lb">lb</Option>
                        <Option value="ml">ml</Option>
                        <Option value="l">l</Option>
                      </Select>
                    </Form.Item>

                    {
                      fields.length > 1 && <MinusCircleOutlined className="remove-item" onClick={() => remove(field.name)} />
                    }
                  </Space>
                ))
              }

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input meal description!'
            }
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
