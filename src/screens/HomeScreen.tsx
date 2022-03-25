import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { SpinnerLoader } from "./../ui/spinner-loader/spinner-loader";
import { MainTitle } from "./../ui/main-title/main-title";
import { useDispatch, useSelector } from "react-redux";
import { registerDataSelect } from "./../store/selectors/loginSelector";
import { logOut } from "./../store/slices/loginSlice";
import { Input, InputWrap, Wrapper } from "./../style/GlobalStyles";
import { columnsSelect, getColumnsLoading, openInputSelect } from "./../store/selectors/columnSelector";
import { TodoItem } from "./../ui/todo-item/todo-item";
import { clearColumns, IColumn } from "./../store/slices/columnSlice";

export const HomeScreen = () => {
  const userInfo = useSelector(registerDataSelect)
  const addColumn = useSelector(openInputSelect)
  const columns = useSelector(columnsSelect)
  const loading = useSelector(getColumnsLoading)
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(logOut())
    dispatch(clearColumns())
  }

  return (
    <View>
      <SpinnerLoader visible={loading}/>
      <AreaView>
        <MainTitle/>
        <Profile>
          <Welcome>Welcome, {userInfo.name}!</Welcome>
          <TouchableOpacity onPress={logOutHandler}>
            <Text style={{color: 'crimson', fontSize: 17}}>LogOut</Text>
          </TouchableOpacity>
        </Profile>
        {addColumn && <AddColumn>
          <InputWrap>
            <Input placeholder="Add column..."/>
          </InputWrap>
        </AddColumn>}
        <ScrollView>
          <Wrapper>
            {columns.map((column:IColumn)=>(
              <TodoItem key={column.id}>{column.title}</TodoItem>
            ))}
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
