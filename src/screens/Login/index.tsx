import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  PermissionsAndroid,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import loginStyles from './style';
import {useNavigation} from '@react-navigation/native';
import { loginFunction } from '../../services/api';

const Login = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const userLogin = () => {
    navigation.navigate('Home' as never);
    var data = new FormData();
    // data.append('username', username);
    // data.append('password', password);
    // loginFunction(data)
    //   .then(res => {
    //     if (res.data.code == '200') {
    //     //   AsyncStorage.setItem('user', res.data.refid);
    //       navigation.navigate('DrowerNavigation' as never);
    //     } else {
    //       Alert.alert('Login Failed', 'Username or Password Incorrect');
    //     }
    //   })
    //   .catch((error:any) => {
    //     console.log('error', error);
    //     Alert.alert('Login Failed', 'Something Went Wrong...');
    //   });
  };
  return (
    <SafeAreaView style={loginStyles.container}>
      <ScrollView>
        <View style={loginStyles.logoView}>
          <View>
            <View style={loginStyles.logoCircle}>
              <Image
                source={require('../../assets/images/Ehpl.png')}
                style={loginStyles.image}></Image>
            </View>
            <Text style={loginStyles.welcomeTxt}>Welcome Back!</Text>
            <Text style={loginStyles.welcomeTxt2}>
              Nice to see you! Let's get started
            </Text>
          </View>
        </View>

        <View style={loginStyles.welcomeView}>
          <Text style={loginStyles.loginTxt}>Login to your account</Text>
          <View style={loginStyles.inputStyle}>
            <View style={loginStyles.sectionStyle}>
              <Image
                source={require('../../assets/images/user.png')}
                style={loginStyles.imageStyle}
              />
              <TextInput
                style={loginStyles.txtInput}
                placeholder="Enter Username"
                underlineColorAndroid="transparent"
                placeholderTextColor="#A9A9A9"
                defaultValue={username}
                onChange={e => setUsername(e.nativeEvent.text)}
              />
            </View>

            <View style={loginStyles.sectionStyle}>
              <Image
                source={require('../../assets/images/password.png')}
                style={loginStyles.imageStyle}
              />
              <TextInput
                style={loginStyles.txtInput}
                placeholder="Enter Password"
                placeholderTextColor="#A9A9A9"
                underlineColorAndroid="transparent"
                secureTextEntry={isSecureEntry ? true : false}
                defaultValue={password}
                onChange={e => setPassword(e.nativeEvent.text)}
              />

              <Pressable onPress={() => setIsSecureEntry(!isSecureEntry)}>
                <Image
                  source={
                    isSecureEntry
                      ? require('../../assets/images/invisible.png')
                      : require('../../assets/images/eye.png')
                  }
                  style={loginStyles.imageIcon}></Image>
              </Pressable>
            </View>
          </View>
          <View style={loginStyles.buttonView}>
            <TouchableOpacity
              style={loginStyles.button}
              onPress={() => userLogin()}>
              <Text style={loginStyles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
