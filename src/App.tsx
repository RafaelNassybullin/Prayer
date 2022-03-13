import React, { FC } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { TodoItem } from './ui/todo-item/todo-item';
import { AnsweredBtn } from './ui/answered-btn/answered-btn';
import { AddInput } from './ui/add-input/add-input';
import { MainTitle } from "./ui/main-title/main-title";

interface IApp {}

export const App: FC<IApp> = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ScrollView>
        <Wrapper>
          <MainTitle/>
          <TodoItem>To do</TodoItem>
          <TodoItem>In Progress</TodoItem>
          <TodoItem>Completed</TodoItem>
          <AnsweredBtn>Show Answered Prayers</AnsweredBtn>
          <AnsweredBtn>hide Answered Prayers</AnsweredBtn>
          <AddInput />
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};
const Wrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;
