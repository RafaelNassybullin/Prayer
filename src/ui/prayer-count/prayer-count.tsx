import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface IPrayerCount {
  count: string
}
export const PrayerCount: FC<IPrayerCount> = ({count, children}) => {
  return (
    <Count>
      {children}
      <Title>{count}</Title>
    </Count>
  )
}
const Count = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 65px;
`
const Title = styled(Text)`
  font-size: 18px;
  margin-left: 5px;
`
