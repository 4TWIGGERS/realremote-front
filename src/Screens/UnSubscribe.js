import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { WebSearchClear, WebSearchSvg } from '../../assets/svgs/AllSvgs';
import { useResponsive } from '../stores/index';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const UnSubscribe = () => {
   const [emailInput, setEmailInput] = useState('');
   const [inputColorChanged, setInputColorChanged] = useState(false);
   const [focused, setFocused] = useState(false);
   const { isDesktop } = useResponsive();
   const [responseText, setResponseText] = useState('');

   const unSubscribeEmail = async () => {
      await axios
         .post('https://realremote.io/email/unsubscribe', {
            email: emailInput,
         })
         .then((res) => {
            if (res) {
               setResponseText(res.data.message);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <>
         <View style={[Styles.inputSearchCont, { marginLeft: isDesktop ? 72 : 10 }]}>
            <View
               style={[
                  isDesktop ? Styles.inpWeb : [Styles.mobInp],
                  { borderColor: focused ? '#0056EC' : 'white' },
                  { borderWidth: focused ? 1 : 1 },
               ]}>
               <View
                  style={{
                     flexDirection: 'row',
                     alignItems: 'center',
                     flex: 1,
                  }}>
                  <WebSearchSvg style={{ marginLeft: 18, marginRight: 14, marginTop: 2 }} />

                  <TextInput
                     placeholder='Your email address'
                     placeholderTextColor='#B5B5BE'
                     style={[
                        {
                           flex: 1,
                           height: '100%',
                           fontSize: 14,
                           fontWeight: '500',
                           outline: 'none',
                           color:
                              reg.test(emailInput) === false && inputColorChanged ? 'red' : 'black',
                        },
                     ]}
                     onFocus={() => setFocused(true)}
                     onBlur={() => setFocused(false)}
                     value={emailInput}
                     onChangeText={(text) => {
                        setEmailInput(text);
                        if (reg.test(emailInput) === false && inputColorChanged) {
                           setInputColorChanged(false);
                        }
                     }}
                     onKeyPress={(e) => {
                        if (e.nativeEvent.key === 'Enter') {
                           if (reg.test(emailInput) === true) {
                              setModalVisible(true);
                           }
                           setInputColorChanged(true);
                        }
                     }}
                  />
                  {emailInput.length > 0 && (
                     <TouchableOpacity
                        style={{ marginRight: 12 }}
                        onPress={() => {
                           setEmailInput('');
                        }}>
                        <WebSearchClear />
                     </TouchableOpacity>
                  )}
               </View>
            </View>

            <TouchableOpacity
               style={[isDesktop ? Styles.searchButtonCont : Styles.searchButtonContMpb]}
               onPress={() => {
                  setInputColorChanged(true);
                  unSubscribeEmail();
               }}>
               <Text style={Styles.searchButtonText}>UnSubscribe</Text>
            </TouchableOpacity>
         </View>
         <View style={Styles.cont}>
            {responseText === 'Successfully unsubscribed' ? (
               <>
                  <Image
                     source={require('../../assets/Positive.png')}
                     style={Styles.image}
                     resizeMode='contain'
                  />
                  <Text style={Styles.text1}>WOOHOO!</Text>
                  <Text style={Styles.text2}>{responseText}</Text>
               </>
            ) : (
               responseText === 'You have entered an invalid e-mail address. please try again' && (
                  <>
                     <Image
                        source={require('../../assets/Negative.png')}
                        style={Styles.image}
                        resizeMode='contain'
                     />
                     <Text style={Styles.text1}>Oops!</Text>
                     <Text style={Styles.text2}>{responseText}</Text>
                  </>
               )
            )}
         </View>
      </>
   );
};

const Styles = StyleSheet.create({
   inputSearchCont: {
      marginTop: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inpWeb: {
      width: '34%',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      height: 64,
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
   searchButtonCont: {
      backgroundColor: '#0056EC',
      borderRadius: 8,
      width: 133,
      height: 64,
      marginLeft: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   searchButtonText: {
      fontFamily: 'SemiBold',
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF',
   },
   mobInp: {
      justifyContent: 'center',
      flex: 1,
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      height: 64,
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
   searchButtonContMpb: {
      backgroundColor: '#0056EC',
      borderRadius: 8,
      width: 120,
      height: 64,
      marginLeft: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
   },
   cont: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
   },
   image: {
      width: 50,
      height: 50,
   },
   text: {
      fontFamily: 'SemiBold',
      fontWeight: '500',
      fontSize: 18,
      color: '#171725',
      textAlign: 'center',
   },
   text1: {
      fontFamily: 'SemiBold',
      fontSize: 16,
      fontWeight: '600',
      color: '#171725',
      letterSpacing: 0.2,
      marginTop: 20,
   },
   text2: {
      fontFamily: 'Medium',
      fontSize: 14,
      fontWeight: '500',
      color: '#171725',
      textAlign: 'center',
      marginTop: 12,
      marginBottom: 42,
      marginHorizontal: 30,
      letterSpacing: 0.2,
   },
});

export default UnSubscribe;
