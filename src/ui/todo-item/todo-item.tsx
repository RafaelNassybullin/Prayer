import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

interface ITodoItem {}

export const TodoItem: FC<ITodoItem> = ({ children }) => {
  return (
    <Item>
      <Title>{children}</Title>
    </Item>
  );
};

const Item = styled(TouchableOpacity)`
  width: 93%;
  height: 65px;
  background: white;
  border-radius: 5px;
  border: 1px solid #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
`;
const Title = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-left: 15px;
  color: #514d47;
`;
