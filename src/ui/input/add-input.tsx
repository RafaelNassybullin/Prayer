import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Input, InputWrap } from './../../style/GlobalStyles';
import styled from 'styled-components/native';

interface IAddInput{
  icon: any
}

export const AddInput: FC<IAddInput> = ({icon})  => {
  return (
    <InputWrap >
      <Icon>
        {icon}
      </Icon>
      <Input placeholder="Add item..."/>
    </InputWrap>
  )
}

const Icon = styled(TouchableOpacity)`
  margin-right: 10px;
`

