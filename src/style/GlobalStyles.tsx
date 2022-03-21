import styled from "styled-components/native";
import { Text, TextInput, View, SafeAreaView, KeyboardAvoidingView } from "react-native";

export const Wrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputWrap = styled(View)`
  width: 93%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #c6c6c6;
  background: white;
  padding: 0 10px 0 15px;
  margin-bottom: 15px;
`

export const Input = styled(TextInput)`
  width: 90%;
  font-size: 20px;
`

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AuthWrap = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Link = styled(Text)`
  color: #2FA4FF;
  font-size: 18px;
`


