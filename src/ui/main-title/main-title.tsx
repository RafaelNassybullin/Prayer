import React, { FC } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { IconAdd } from "../../assets/IconAdd";

interface IMainTitle {

}

export const MainTitle: FC<IMainTitle> = () => {
  return (
    <Wrapper>
      <Container>
        <Title>My Desc</Title>
        <Add>
          <IconAdd width={23} height={23}/>
        </Add>
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  z-index: 10;
`
const Container = styled(View)`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
  border-bottom-color: #c6c6c6;
  border-bottom-width: 1px;
`
const Title = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  color: black;
`
const Add = styled(TouchableOpacity)`
  position: absolute;
  right: 17px;
`
