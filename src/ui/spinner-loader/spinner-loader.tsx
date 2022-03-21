import React, { FC } from 'react';
import { Text, SafeAreaView } from 'react-native'
import styled from 'styled-components/native';

interface ISpinnerLoader {
  visible: boolean
}

export const SpinnerLoader: FC<ISpinnerLoader> = ({visible}) => {
  return (
    <>
      {
        visible && <LoaderView>
          <LoaderTitle>Loading...</LoaderTitle>
        </LoaderView>
      }
    </>
  )
};

const LoaderView = styled(SafeAreaView)`
  position: absolute;
  left: 0;
  top: 0;
  background: #0000003d;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 15;
`
const LoaderTitle = styled(Text)`
  font-size: 24px;
  color: black;
`


