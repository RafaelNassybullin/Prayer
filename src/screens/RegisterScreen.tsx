import React, { useContext, FC } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { AuthContext } from "./../context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "components/Navigation";
import { SpinnerLoader } from "./../ui/spinner-loader/spinner-loader";
import { Input, InputWrap, Link, Container } from "./../style/GlobalStyles";
import { useForm, Controller } from "react-hook-form";
import { AnsweredBtn } from "./../ui/answered-btn/answered-btn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IRegisterScreen {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

const registerValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const RegisterScreen: FC<IRegisterScreen> = ({navigation}) => {
  const {register, isLoading, registerIsValid} = useContext(AuthContext)

  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = (data:any) => {
    register(data.name, data.email, data.password)
  }

  return (
    <Container>
      <SpinnerLoader visible={isLoading}/>
      <Text style={{fontSize: 60}}>Prayer</Text>
      <Text style={{fontSize: 24, marginBottom:20 }}>Sign-Up</Text>
      <View>
        {errors.name && <Text style={{color: 'red'}}>Name is empty</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputWrap>
              <Input
                value={value}
                placeholder="Enter name"
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </InputWrap>
          )}
          name="name"
        />
        {errors.email && <Text style={{color: 'red'}}>Email is not valid</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputWrap>
              <Input
                value={value}
                placeholder="Enter email"
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </InputWrap>
          )}
          name="email"
        />
        {errors.password && <Text style={{color: 'red'}}>Password must have at least 8 characters</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputWrap>
              <Input
                value={value}
                placeholder="Enter password"
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry
              />
            </InputWrap>
          )}
          name="password"
        />
        {!!registerIsValid && <Text style={{color: 'red'}}>{registerIsValid}</Text>}
        <AnsweredBtn press={handleSubmit(onSubmit)}>Register</AnsweredBtn>
        <View style={{flexDirection: "row", marginTop: 20}}>
          <Text style={{fontSize:18}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Link>Login</Link>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};


