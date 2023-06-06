import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'aniuta';
import React, { useState } from 'react';

import { API } from '../services/index';

const userAuth = createStore({
   name: 'AuthService',
   Store: () => {
      const initialState = { token: null };
      const [authState, setAuthState] = useState({ ...initialState });
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      //qvevita ori
      const [clickedValue, setclickedValue] = useState(0);
      const [clickedNumber, setclickedNumber] = useState(0);

      const [ratedValue, setratedValue] = useState(0);
      const [ratedNumber, setratedNumber] = useState(0);

      const getToken = async () => {
         const gotAuthAsyncToken = await AsyncStorage.getItem('tokenAuth');
         if (gotAuthAsyncToken) {
            const { token } = JSON.parse(gotAuthAsyncToken);
            setAuthState({ token });
            setIsLoggedIn(true);
         }
      };

      const signIn = async ({ name, password }) => {
         // console.log('name', name);
         // console.log('password', password);
         API.signIn({
            data: { name, password },
         })
            .then((response) => {
               if (response.data.hasOwnProperty('token')) {
                  const { token } = response.data;
                  AsyncStorage.setItem('tokenAuth', JSON.stringify({ token }));
                  setAuthState({ token });
                  setIsLoggedIn(true);
               } else {
                  setAuthState({ ...initialState });
               }
            })
            .catch((error) => {
               alert(error);
            });
      };

      const signUp = async ({ name, password }) => {
         API.signUp({
            data: { name, password },
         })
            .then((response) => {
               console.log('signUp', response);
            })
            .catch((error) => alert(error));
      };

      const signOut = () => {
         AsyncStorage.removeItem('tokenAuth');
         setAuthState({ ...initialState });
         setIsLoggedIn(false);
      };

      const getNumOfClicked = async (clickedNumber) => {
         const getNUmber = await AsyncStorage.getItem('ReviewNUmber');

         if (getNUmber) {
            setclickedValue(JSON.parse(getNUmber));
         }
      };

      const setNumOfClicked = async (setclickedNumber) => {
         const jsonValue = JSON.stringify(clickedNumber);

         try {
            await AsyncStorage.setItem('ReviewNUmber', jsonValue);
         } catch (e) {
            console.log(e, 'error');
         }
      };

      const getNumOfRated = async () => {
         const getNUmber = await AsyncStorage.getItem('RatedNumber');

         if (getNUmber) {
            setratedValue(JSON.parse(getNUmber));
         }
      };

      const setNumOfRated = async (ratedNumber) => {
         const jsonValue = JSON.stringify(ratedNumber);

         try {
            await AsyncStorage.setItem('RatedNumber', jsonValue);
         } catch (e) {
            console.log(e, 'error');
         }
      };

      return {
         ...authState,
         signIn,
         signUp,
         isLoggedIn,
         authState,
         getToken,
         signOut,
         getNumOfClicked,
         setNumOfClicked,
         clickedNumber,
         setclickedNumber,
         clickedValue,
         getNumOfRated,
         setNumOfRated,
         ratedValue,
         setratedValue,
         ratedNumber,
         setratedNumber,
      };
   },
});

export default userAuth;
