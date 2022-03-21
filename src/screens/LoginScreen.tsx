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

interface ILoginScreen {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const LoginScreen: FC<ILoginScreen> = ({navigation}) => {
  const {login, isLoading, loginIsValid} = useContext(AuthContext)

  const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    login(data.email, data.password)
    console.log(data)
  }

  return (
    <Container>
      <SpinnerLoader visible={isLoading}/>
      <Text style={{fontSize: 60}}>Prayer</Text>
      <Text style={{fontSize: 24, marginBottom:20 }}>Sign-In</Text>

      <View>
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
        {!!loginIsValid && <Text style={{color: 'red'}}>{loginIsValid}</Text>}
        <AnsweredBtn press={handleSubmit(onSubmit)}>Login</AnsweredBtn>
        <View style={{flexDirection: "row", marginTop: 20}}>
          <Text style={{fontSize: 18}}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Link>Register</Link>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

