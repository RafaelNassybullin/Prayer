import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { IconAdd } from '../../assets/IconAdd';

export const AddInput = () => {
  return (
    <InputWrap>
      <Icon>
        <IconAdd/>
      </Icon>
      <Input placeholder='Add a prayer...'/>
    </InputWrap>
  )
}

const InputWrap = styled(View)`
  width: 93%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #c6c6c6;
  padding: 0 10px 0 15px;
`
const Icon = styled(TouchableOpacity)`
  margin-right: 10px;
`
const Input = styled(TextInput)`
  width: 90%;
  font-size: 20px;
`
