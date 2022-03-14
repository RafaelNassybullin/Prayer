import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { TodoItem } from './ui/todo-item/todo-item';
import { AnsweredBtn } from './ui/answered-btn/answered-btn';
import { AddInput } from './ui/add-input/add-input';
import { MainTitle } from "./ui/main-title/main-title";
import { Members } from "./ui/members/members";
import { PrayerItem } from "./ui/prayer-item/prayer-item";
import { Wrapper } from './style/GlobalStyles';

export const App: FC = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="black" barStyle="light-content"/>
      <ScrollView>
        <Wrapper>
          <MainTitle/>
          <TodoItem>To do</TodoItem>
          <TodoItem>In Progress</TodoItem>
          <TodoItem>Completed</TodoItem>
          <AnsweredBtn>Show Answered Prayers</AnsweredBtn>
          <AddInput/>
          <Members/>
          <PrayerItem/>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

