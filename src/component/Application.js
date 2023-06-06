import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, StyleSheet, Platform, useColorScheme, Dimensions, ScrollView } from 'react-native';

import MyStack from '../navigation/MyStack';
import { useResponsive, useNotification, userAuth, useFirstJoinUser } from '../stores/index';
import { RuntimeConst } from '../utils/index';

const screen = Dimensions.get('window');

const Application = () => {
   const { isDesktop } = useResponsive();
   const { isFirsJoinUser } = useFirstJoinUser();
   const colorScheme = useColorScheme();
   const isLoggedIn = !!isFirsJoinUser;

   const { registerForPushNotificationsAsync } = useNotification();

   const { authState, getToken } = userAuth();

   useEffect(() => {
      getToken();
   }, []);

   useEffect(() => {
      if (Platform.OS !== 'web') {
         registerForPushNotificationsAsync();
      }
   }, []);

   const [loaded] = useFonts({
      Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
      Medium: require('../../assets/fonts/Poppins-Medium.ttf'),
      SemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
   });

   if (authState) {
      RuntimeConst.authToken = authState.token;
   }

   if (!loaded) {
      return null;
   }
   const padding = (screen.width - 1440) / 2;
   return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
         <StatusBar style='auto' />
         <View
            style={[
               styles.containerMobile,
               { maxWidth: '100%', paddingHorizontal: isDesktop ? padding : 0 },
            ]}>
            <MyStack isLoggedIn={isLoggedIn} />
         </View>
      </View>
   );
};
const styles = StyleSheet.create({
   containerMobile: {
      flex: 1,
      width: '100%',
   },
});

export default Application;
