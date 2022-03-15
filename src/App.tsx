import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { TodoItem } from './ui/todo-item/todo-item';
// import { AnsweredBtn } from './ui/answered-btn/answered-btn';
// import { AddInput } from './ui/add-input/add-input';
import { MainTitle } from "./ui/main-title/main-title";
// import { Members } from "./ui/members/members";
// import { PrayerItem } from "./ui/prayer-item/prayer-item";
import { Wrapper } from './style/GlobalStyles';
import styled from 'styled-components/native';

export const App: FC = () => {
  return (
    <AreaView>
      <StatusBar translucent hidden={true}/>
      <MainTitle/>

      <ScrollView>
        <Wrapper>

          <TodoItem>To do</TodoItem>
          <TodoItem>In Progress</TodoItem>
          <TodoItem>Completed</TodoItem>

        {/*  <AnsweredBtn>Show Answered Prayers</AnsweredBtn>*/}
        {/*  <AddInput/>*/}
        {/*  <Members/>*/}
        {/*  <PrayerItem/>*/}

        </Wrapper>

      </ScrollView>
    </AreaView>
  );
};

const AreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f1f1f1;
`
