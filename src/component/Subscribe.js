import { Portal } from '@gorhom/portal';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   Animated,
   Platform,
} from 'react-native';

import { WebSearchClear, SubscribeSvg, CheckMarkSvg } from '../../assets/svgs/AllSvgs';
import { useResponsive } from '../stores/index';
import SubscribeCategory from './SubscribeCategory';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const category = ['Software Development', 'Design', 'Management', 'Information Technology'];

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Subscribe() {
   const [focused, setFocused] = useState(false);

   const [modalVisible, setModalVisible] = useState(false);

   const [modalFavoriteJob, setModalFavoriteJob] = useState(false);
   const { isDesktop } = useResponsive();

   const [emailInput, setEmailInput] = useState('');
   const [inputColorChanged, setInputColorChanged] = useState(false);
   const [chosenCategories, setChosenCategories] = useState([]);

   const [scale] = useState(new Animated.Value(1));
   const fadeAnim = useRef(new Animated.Value(0)).current;
   const fadeAnimFav = useRef(new Animated.Value(0)).current;

   const fadeIn = () => {
      Animated.timing(fadeAnim, {
         toValue: 1,
         duration: 100,
         useNativeDriver: true,
      }).start();
   };

   const fadeOut = () => {
      Animated.timing(fadeAnim, {
         toValue: 0,
         duration: 100,
         useNativeDriver: true,
      }).start(() => {
         setModalVisible(false);
      });
   };
   const fadeInFav = () => {
      Animated.timing(fadeAnimFav, {
         toValue: 1,
         duration: 100,
         useNativeDriver: true,
      }).start();
   };

   const fadeOutFav = () => {
      Animated.timing(fadeAnimFav, {
         toValue: 0,
         duration: 100,
         useNativeDriver: true,
      }).start(() => {
         setModalFavoriteJob(false);
      });
   };
   const addEmail = async () => {
      await axios
         .post('https://realremote.io/email/add', {
            email: emailInput,
            category: chosenCategories,
         })
         .then((res) => {
            // console.log('res', res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      if (modalVisible) {
         fadeIn();
      }
   }, [modalVisible]);

   useEffect(() => {
      if (modalFavoriteJob) {
         fadeInFav();
      }
   }, [modalFavoriteJob]);
   return (
      <>
         {!isDesktop && (
            <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
               <Text style={Styles.title}>Subscribe</Text>
               <View
                  style={[
                     Styles.cont,
                     {
                        borderColor: focused ? '#0056EC' : '#F0F2F5',
                     },
                  ]}>
                  <TextInput
                     style={[
                        Platform.OS === 'web'
                           ? [
                                Styles.inp,
                                { outline: 'none' },
                                {
                                   color:
                                      reg.test(emailInput) === false && inputColorChanged
                                         ? 'red'
                                         : 'black',
                                },
                             ]
                           : [
                                Styles.inpAPp,
                                {
                                   color:
                                      reg.test(emailInput) === false && inputColorChanged
                                         ? 'red'
                                         : 'black',
                                },
                             ],
                     ]}
                     placeholder='Your email address '
                     autoCapitalize='none'
                     autoCorrect={false}
                     value={emailInput}
                     onChangeText={(text) => {
                        setEmailInput(text);
                        if (reg.test(emailInput) === false && inputColorChanged) {
                           setInputColorChanged(false);
                        }
                     }}
                     onFocus={() => {
                        setFocused(true);
                     }}
                     onBlur={() => {
                        setFocused(false);
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
                  <TouchableOpacity
                     style={Styles.svgCont}
                     onPress={() => {
                        if (reg.test(emailInput) === true) {
                           setModalVisible(true);
                        }
                        setInputColorChanged(true);
                     }}>
                     <SubscribeSvg />
                  </TouchableOpacity>
               </View>
            </View>
         )}

         {isDesktop && (
            <View style={Styles.inputSearchCont}>
               <View
                  style={[
                     isDesktop ? Styles.inpWeb : Styles.mobInp,
                     { borderColor: focused ? '#0056EC' : 'white' },
                     { borderWidth: focused ? 1 : 1 },
                  ]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
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
                              padding: 24,
                              color:
                                 reg.test(emailInput) === false && inputColorChanged
                                    ? 'red'
                                    : 'black',
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

               <AnimatedTouchable
                  style={[Styles.searchButtonCont, { transform: [{ scale }] }]}
                  activeOpacity={1}
                  onPressOut={() => {
                     Animated.timing(scale, {
                        duration: 200,
                        toValue: 1,
                     }).start();
                  }}
                  onPressIn={() => {
                     Animated.timing(scale, {
                        duration: 150,
                        toValue: 0.75,
                     }).start();
                  }}
                  onPress={() => {
                     if (reg.test(emailInput) === true) {
                        setModalVisible(true);
                     }
                     setInputColorChanged(true);
                  }}>
                  <Text style={Styles.searchButtonText}>Subscribe</Text>
               </AnimatedTouchable>
            </View>
         )}
         <Portal>
            {modalVisible && (
               <Animated.View
                  style={[
                     Styles.modalCont,
                     isDesktop && Styles.modalContMob,
                     { opacity: fadeAnim },
                  ]}>
                  <View style={[Styles.modalContChild, isDesktop && Styles.modalContChildWeb]}>
                     <Text style={Styles.text}>Subscribe Your Favorite Category</Text>
                     <View style={{ marginTop: 20 }}>
                        {category?.map((item, index) => {
                           return (
                              <SubscribeCategory
                                 title={item}
                                 key={index}
                                 setChosenCategories={setChosenCategories}
                                 chosenCategories={chosenCategories}
                                 index={index}
                              />
                           );
                        })}
                     </View>

                     <View
                        style={{
                           flexDirection: 'row',
                           marginTop: 32,
                           justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                           onPress={() => {
                              fadeOut();
                              setEmailInput('');
                              if (chosenCategories.length) {
                                 chosenCategories.length = 0;
                              }
                           }}
                           style={[
                              Styles.touch,
                              {
                                 backgroundColor: 'white',
                                 width: 100,
                                 borderWidth: 1,
                                 borderColor: '#92929D',
                              },
                           ]}>
                           <Text style={[Styles.titleTouch, { color: '#696974' }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={[
                              Styles.touch,
                              { width: 120 },
                              { backgroundColor: chosenCategories.length ? '#0056EC' : '#F0F2F5' },
                           ]}
                           onKeyPress={(e) => {
                              if (e.nativeEvent.key === 'Enter' && focused) {
                                 if (chosenCategories.length) {
                                    fadeOut();
                                    setModalFavoriteJob(true);
                                 }
                              }
                           }}
                           onPress={() => {
                              if (chosenCategories.length) {
                                 fadeOut();
                                 setModalFavoriteJob(true);
                              }
                              addEmail();
                           }}>
                           <Text
                              style={[
                                 Styles.titleTouch,
                                 { color: chosenCategories.length ? '#FFFFFF' : '#696974' },
                              ]}>
                              Subscribe
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </Animated.View>
            )}
            {modalFavoriteJob && (
               <Animated.View
                  style={[
                     Styles.favCont,
                     isDesktop && Styles.favContWeb,
                     { opacity: fadeAnimFav },
                  ]}>
                  <View
                     style={[Styles.modalFavContChild, isDesktop && Styles.modalFavContChildWeb]}>
                     <View style={{ alignItems: 'center' }}>
                        <View style={{ marginTop: 40, marginBottom: 20 }}>
                           <CheckMarkSvg />
                        </View>
                        <Text style={Styles.text1}>WOOHOO!</Text>
                        <Text style={Styles.text2}>
                           You will receive your favorite job notifications on your email address!
                        </Text>
                     </View>

                     <TouchableOpacity
                        style={Styles.touch}
                        onPress={() => {
                           setEmailInput('');
                           fadeOutFav();
                           if (chosenCategories.length) {
                              setChosenCategories([]);
                           }
                        }}>
                        <Text style={Styles.titleTouch}>GOT IT</Text>
                     </TouchableOpacity>
                  </View>
               </Animated.View>
            )}
         </Portal>
      </>
   );
}

const Styles = StyleSheet.create({
   cont: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#F0F2F5',
      borderRadius: 8,
      height: 52,
      marginTop: 12,
      alignItems: 'center',
   },
   title: {
      fontFamily: 'SemiBold',
      fontSize: 16,
      fontWeight: '600',
      color: '#171725',
   },
   svgCont: {
      width: 44,
      height: 44,
      backgroundColor: '#0056EC',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 4,
   },
   inp: {
      flex: 1,
      height: '100%',
      paddingLeft: 16,
   },
   inpAPp: {
      flex: 1,
      height: '100%',
      paddingLeft: 16,
   },
   modalCont: {
      position: 'absolute',
      backgroundColor: '#04101666',
      width: '100%',
      height: '100%',
      // alignItems: 'center',
      justifyContent: 'center',
      // paddingTop: 196,
   },
   modalContMob: {
      position: 'absolute',
      backgroundColor: '#04101666',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   categoryCont: {
      marginBottom: 12,
      height: 52,
      borderColor: '#0056EC',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
   },
   modalContChild: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      marginHorizontal: 16,

      paddingHorizontal: 24,
      // top: 200,
   },
   modalContChildWeb: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      width: 432,
      paddingHorizontal: 32,
   },
   text: {
      marginTop: 24,
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'SemiBold',
      color: '#171725',
   },
   text1: {
      fontFamily: 'SemiBold',
      fontSize: 16,
      fontWeight: '600',
      color: '#171725',
      letterSpacing: 0.2,
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
   touch: {
      marginBottom: 24,
      height: 52,
      backgroundColor: '#0056EC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
   },
   favCont: {
      position: 'absolute',
      backgroundColor: '#04101666',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
   },
   favContWeb: {
      position: 'absolute',
      backgroundColor: '#04101666',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   modalFavContChild: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      marginHorizontal: 16,
      paddingHorizontal: 24,
      // top: 240,
   },
   modalFavContChildWeb: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      width: 432,
      paddingHorizontal: 24,
   },
   titleTouch: {
      fontFamily: 'Medium',
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: 14,
   },
   inputSearchCont: {
      marginTop: 48,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 72,
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
});
