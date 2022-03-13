import React, { FC } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { IconSettings } from "../../assets/IconSettings";

interface IMainTitle {

}

export const MainTitle: FC<IMainTitle> = () => {
  return (
    <Wrapper>
      <Title>My Desc</Title>
      <Add>
        <IconSettings/>
      </Add>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex-direction: row;
  display:flex;
  align-items:center;
  justify-content: center;
  position: relative;
  height: 65px;
  width: 100%;
`
const Title = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  color: black;
`
const Add = styled(TouchableOpacity)`
 position: absolute;
  right: 15px;
  
`
