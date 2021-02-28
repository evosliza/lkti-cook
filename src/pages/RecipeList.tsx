import React, { useEffect, useState } from 'react';

import { Card, Empty, List, Tag } from 'antd';

import Button from 'antd/lib/button';

import './recipe-list.scss';
import { RecipeModal } from './RecipeModal';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeList } from '../store/selectors';
import actions from '../store/actions';

export const RecipeList = () => {
  const recipeList = useSelector(getRecipeList);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(actions.fetchRecipeList());
  }, [dispatch]);

  const openCreateModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="recipe-list-container">
      <Button onClick={openCreateModal}>Add new recipe</Button>
      <RecipeModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />

      <div className="recipe-list">
        {
          recipeList?.length ? (
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={recipeList}
              renderItem={item => (
                <List.Item>
                  <Card
                    title={item.name}
                    headStyle={{ background: '#d4d5d5' }}
                    bodyStyle={{
                      height: 100,
                      overflow: 'hidden',
                    }}
                    actions={[
                      <>
                        {
                          item.ingredients!.map((ingredient) => (
                            <Tag key={ingredient.name} color="#abbba9">{ingredient.name}</Tag>
                          ))
                        }
                      </>
                    ]}
                  >{item.description}</Card>
                </List.Item>
              )}
            />
          ) : <Empty />
        }
      </div>
    </div>
  );
};

export default RecipeList;
