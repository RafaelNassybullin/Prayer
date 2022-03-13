import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

interface IAnsweredBtn {}

export const AnsweredBtn: FC<IAnsweredBtn> = ({ children }) => {
  return (
   <Button>
       <Title>{children}</Title>
   </Button>
  );
};

const Button = styled(TouchableOpacity)`
  margin: 10px 0;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60%;
  padding: 0 25px;
  height: 40px;
  border-radius: 25px;
  background-color: #BFB393;
`;

const Title = styled(Text)`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
`;
