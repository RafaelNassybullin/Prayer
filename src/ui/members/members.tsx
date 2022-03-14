import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { IconAdd } from "../../assets/IconAdd";

export const Members: FC = () => {
  return (
    <MembersWrapper>
      <BlueText>MEMBERS</BlueText>
      <AvatarWrapper>
        <Avatar source={require('../../assets/image/eeww.jpg')}/>
        <Avatar source={require('../../assets/image/erfer.jpg')}/>
        <Add>
          <IconAdd width={16} height={16} fill={'#fff'}/>
        </Add>
      </AvatarWrapper>
    </MembersWrapper>
  )
}
const MembersWrapper = styled(View)`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;

`
const AvatarWrapper = styled(View)`
  margin-top: 15px;
  flex-direction: row;
`
const BlueText = styled(Text)`
  color: #72A8BC;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
`;
const Avatar = styled(Image)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 8px;
`;
const Add = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: #BFB393;
  display: flex;
  align-items: center;
  justify-content: center;
`;
