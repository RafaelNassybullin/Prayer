import React, { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "components/Navigation";
import { SpinnerLoader } from "./../ui/spinner-loader/spinner-loader";
import { Input, InputWrap, Link, AuthWrap } from "./../style/GlobalStyles";
import { useForm, Controller } from "react-hook-form";
import { AnsweredBtn } from "./../ui/answered-btn/answered-btn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerRequired } from "./../store/slices/loginSlice";
import { registerDataSelect, registerErrorSelect, registerLoadingSelect } from "./../store/selectors/loginSelector";

interface IRegisterScreen {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

type FormData = {
  name: string;
  email: string;
  password: string;
};

const registerValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const RegisterScreen: FC<IRegisterScreen> = ({navigation}) => {

  const res = useSelector(registerDataSelect)
  const registerIsValid = useSelector(registerErrorSelect)
  const isLoading = useSelector(registerLoadingSelect)

  const dispatch = useDispatch()

  console.log(res, 'lojjj');

  const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = (data: FormData) => {
    dispatch(registerRequired(data))
  }

  return (
    <AuthWrap behavior="padding">
      <SpinnerLoader visible={isLoading}/>
      <Text style={{fontSize: 60}}>Prayer</Text>
      <Text style={{fontSize: 24, marginBottom: 20}}>Sign-Up</Text>
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
        {registerIsValid && <Text style={{color: 'red'}}>User with this email address already exists</Text>}
        <AnsweredBtn press={handleSubmit(onSubmit)}>Register</AnsweredBtn>
        <View style={{flexDirection: "row", marginTop: 20}}>
          <Text style={{fontSize: 18}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Link>Login</Link>
          </TouchableOpacity>
        </View>
      </View>
    </AuthWrap>
  );
};


