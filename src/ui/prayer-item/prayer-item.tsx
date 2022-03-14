import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { IconPray } from "../../assets/IconPray";
import { IconUser } from "../../assets/IconUser";
import { PrayerCount } from "../../ui/prayer-count/prayer-count";

export const PrayerItem = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <Item>
      <Wrapper>
        <TextItems>
          <Marker/>
          <CheckBox value={isSelected} onValueChange={setSelection}/>
          <Title>Prayer item two...</Title>
        </TextItems>
        <CountItems>
          <PrayerCount count={'3'}>
            <IconUser/>
          </PrayerCount>
          <PrayerCount count={'123'}>
            <IconPray/>
          </PrayerCount>
        </CountItems>
      </Wrapper>
    </Item>
  )
}

const Item = styled(TouchableOpacity)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
`
const Wrapper = styled(View)`
  width: 93%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom-color: #c6c6c6;
  border-bottom-width: 1px;
  border-top-color: #c6c6c6;
  border-top-width: 1px;
`
const Title = styled(Text)`
  font-size: 18px;
  margin-left: 15px;
`
const TextItems = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const CountItems = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const Marker = styled(View)`
  width: 5px;
  height: 25px;
  background: #AC5253;
  border-radius: 2px;
  margin-right: 15px;
`
