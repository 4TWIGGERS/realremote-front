import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'aniuta';
import axios from 'axios';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';
import { AppState, Platform } from 'react-native';

import { RuntimeConst } from '../utils';

const useNotification = createStore({
   name: 'useNotification',
   Store: () => {
      const [gotToken, setGotToken] = useState('');
      const [gotTokenAsync, setGotTokenAsync] = useState('');

      const registerForPushNotificationsAsync = async () => {
         let token;
         if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();

            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
               const { status } = await Notifications.requestPermissionsAsync();
               finalStatus = status;
            }

            RuntimeConst.finalStatus = finalStatus;

            if (finalStatus !== 'granted') {
               RuntimeConst.token = '';
               // alert('Failed to get push token for push notification!');
               return;
            }

            token = (await Notifications.getExpoPushTokenAsync()).data;

            RuntimeConst.token = token;

            notificationTokenAsync(token);

            if (token && gotTokenAsync) {
               if (token !== gotTokenAsync) {
                  const obj = {};

                  obj.oldExpoToken = gotTokenAsync;
                  obj.newExpoToken = token;

                  axios
                     .post(
                        'https://realremote.io/token/edit',

                        obj
                     )
                     .then((res) => {
                        // console.log('res', res.data);
                     })
                     .catch((e) => console.log(e));
               } else {
                  alert('Must use physical device for Push Notifications');
               }
            }
         }

         if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
               name: 'default',
               importance: Notifications.AndroidImportance.MAX,
               vibrationPattern: [0, 250, 250, 250],
               lightColor: '#FF231F7C',
            });
         }

         return token;
      };

      const notificationTokenAsync = async (token) => {
         const getTokenValue = await AsyncStorage.getItem('TokenNotification');

         if (getTokenValue) {
            setGotTokenAsync(JSON.parse(getTokenValue));
         }
         try {
            const jsonValueToken = JSON.stringify(token);

            await AsyncStorage.setItem('TokenNotification', jsonValueToken);
         } catch (e) {
            console.log(e);
         }
      };

      const appState = useRef(AppState.currentState);

      const _handleAppStateChange = (nextAppState) => {
         if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
            if (Platform.OS !== 'web') {
               registerForPushNotificationsAsync();
            }
         }

         appState.current = nextAppState;
      };

      useEffect(() => {
         AppState.addEventListener('change', _handleAppStateChange);

         return () => {
            AppState.removeEventListener('change', _handleAppStateChange);
         };
      }, []);

      return { registerForPushNotificationsAsync, gotToken };
   },
});
export default useNotification;
