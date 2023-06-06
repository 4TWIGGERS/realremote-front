import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AuthButton from '../components/common/AuthButton';
import AuthTextInput from '../components/common/AuthTextInput';
import { userAuth } from '../stores/index';

export default function SignInScreen({ navigation }) {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   const { signIn, isLoggedIn } = userAuth();

   useEffect(() => {
      if (isLoggedIn) {
         navigation.navigate('busfaabra');
      }
   }, [isLoggedIn]);

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Sign In</Text>
         <View style={Styles.cont}>
            <AuthTextInput
               style={Styles.inp}
               value={name}
               placeholder='name'
               onChangeText={setName}
            />
         </View>
         <View style={Styles.cont}>
            <AuthTextInput
               onKeyPress={(e) => {
                  if (e.nativeEvent.key === 'Enter') {
                     signIn({ name, password });
                     setPassword('');
                     setName('');
                  }
               }}
               style={Styles.inp}
               value={password}
               onChangeText={setPassword}
               placeholder='password'
               secureTextEntry
            />
         </View>
         <AuthButton
            title='Sign In'
            onPress={() => {
               if (name.length > 4 && password.length > 4) {
                  signIn({ name, password });
               }
            }}
         />
         <Text style={{ marginTop: 116 }}></Text>
      </View>
   );
}

const Styles = StyleSheet.create({
   cont: {
      marginTop: 10,
      borderRadius: 20,
      borderColor: 'gray',
      borderWidth: 1,
      // paddingVertical: 10,
      height: 40,
      width: 200,
      alignItems: 'center',
   },
   inp: {
      height: '100%',
      backgroundColor: 'lightgrey',
      width: '100%',
      borderRadius: 20,
      paddingLeft: 10,
   },
});
