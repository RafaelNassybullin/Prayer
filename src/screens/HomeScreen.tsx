import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Input, InputWrap, Wrapper } from "./../style/GlobalStyles";
import styled from 'styled-components/native';
import { AuthContext } from "./../context/AuthContext";
import { SpinnerLoader } from "./../ui/spinner-loader/spinner-loader";
import { MainTitle } from "./../ui/main-title/main-title";
import { TodoItem } from "./../ui/todo-item/todo-item";

export const HomeScreen = () => {
  const {logout, userInfo, isLoading, addColumn} = useContext(AuthContext)

  return (
    <View>
      <SpinnerLoader visible={isLoading}/>
      <AreaView>
        <MainTitle/>
        <Profile>
          <Welcome>Welcome, {userInfo.name}!</Welcome>
          <TouchableOpacity onPress={logout}>
            <Text style={{color: 'crimson', fontSize: 17}}>LogOut</Text>
          </TouchableOpacity>
        </Profile>

        {addColumn&&<AddColumn>
          <InputWrap>
            <Input placeholder="Add column..."/>
          </InputWrap>
        </AddColumn>}

        <ScrollView>
          <Wrapper>
            <TodoItem>To do</TodoItem>
            <TodoItem>In Progress</TodoItem>
            <TodoItem>Completed</TodoItem>
          </Wrapper>
        </ScrollView>
      </AreaView>
    </View>
  )
}

const Welcome = styled(Text)`
  font-size: 26px;
  margin-bottom: 8px;
  align-items: center;
`
const Profile = styled(View)`
  margin-horizontal: 4.5%;
  margin-top: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const AreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f1f1f1;
`
const AddColumn = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`
