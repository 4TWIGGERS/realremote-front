import Constants from 'expo-constants';
import React, { useState, useEffect, useRef } from 'react';
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   TextInput,
   Platform,
   Image,
   Share,
} from 'react-native';
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming,
   useDerivedValue,
   interpolate,
   Extrapolate,
   runOnJS,
} from 'react-native-reanimated';

import {
   ArrowLeft,
   RealRemoteLogoSvg,
   RealRemoteMobLogoSvg,
   SearchDellSvg,
   SearchSvg,
   ShareSvg,
} from '../../assets/svgs/AllSvgs';
import useDebounce from '../hooks/useDebounce';
import { useResponsive } from '../stores/index';
import AppDownload from './AppDownload';
import SearchWeb from './SearchWeb';

const { statusBarHeight } = Constants;

export let searchMob = '';

export default function Header({
   scrollAnimatedValue,
   getSearchData,
   navigation,
   details,
   scrollRef,
   home,
   lineShow,
   onPressSubscribeFilter,
   link,
}) {
   const [searchFocused, setSearchFocused] = useState(true);

   const { setWidth, isDesktop, width } = useResponsive();

   const [cancelSearch, setCancelSearch] = useState(false);

   const [globalHeaderAppDownload, setGlobalHeaderAppDownload] = useState(true);

   const [searchInput, setSearchInput] = useState('');

   const [lastChanged, setLastChanged] = useState(true);

   const check = useRef(false);

   const animationSearchWidth = useSharedValue(width - 32);

   const animSearchOpacity = useSharedValue(0);

   const animationMarginTop = useSharedValue(76);

   const animationStyleSearchWidth = useAnimatedStyle(() => {
      return {
         width: animationSearchWidth.value,
         opacity: animSearchOpacity.value,
      };
   });

   const derivedShadowOpacity = useDerivedValue(() => {
      return interpolate(scrollAnimatedValue.value, [0, 200], [0, 5], Extrapolate.CLAMP);
   });

   const animatedShadowOpacityStyle = useAnimatedStyle(() => {
      return {
         shadowOpacity: derivedShadowOpacity.value,
         elevation: derivedShadowOpacity.value,
      };
   });

   const animatedMarginTopStyle = useAnimatedStyle(() => {
      return {
         marginTop: animationMarginTop.value,
      };
   });

   useEffect(() => {
      if (!globalHeaderAppDownload) {
         animationMarginTop.value = withTiming(0, { duration: 500 });
      }
   }, [globalHeaderAppDownload]);

   useEffect(() => {
      if (Platform.OS !== 'web') {
         if (searchFocused) {
            animationSearchWidth.value = width - 32;
            animSearchOpacity.value = 0;
         } else {
            animationSearchWidth.value = withTiming(width - 88, {
               duration: 400,
            });

            animSearchOpacity.value = withTiming(1, { duration: 200 });
         }
      }
   }, [searchFocused]);

   const searchDebounced = useDebounce(() => getSearchData?.(), 500);

   useEffect(() => {
      if (check.current) {
         searchMob = searchInput;
         searchDebounced();
      } else {
         check.current = true;
      }
   }, [searchInput]);

   const onShare = async () => {
      try {
         const result = await Share.share({
            message: link,
         });
         if (result.action === Share.sharedAction) {
            if (result.activityType) {
               // shared with activity type of result.activityType
            } else {
               // shared
            }
         } else if (result.action === Share.dismissedAction) {
            // dismissed
         }
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <>
         {!isDesktop && Platform.OS === 'web' && !details && globalHeaderAppDownload && (
            <AppDownload {...{ setGlobalHeaderAppDownload }} />
         )}
         <Animated.View
            style={[
               !isDesktop && Styles.anim,
               animatedShadowOpacityStyle,
               // lastChanged &&
               // Platform.OS === 'web' && !isDesktop && !details && animatedMarginTopStyle,
               {
                  marginTop:
                     Platform.OS === 'web' && !isDesktop && globalHeaderAppDownload && !details
                        ? 76
                        : 0,
               },
            ]}>
            {Platform.OS !== 'web' && <View style={{ height: statusBarHeight }} />}
            {searchFocused ? (
               <View
                  onLayout={({ nativeEvent }) => {
                     if (nativeEvent.layout.width !== 0) {
                        setWidth(nativeEvent.layout.width);
                     }
                  }}
                  style={[
                     Platform.OS === 'web'
                        ? isDesktop
                           ? [Styles.cont, { paddingHorizontal: details ? 182 : 72 }]
                           : [
                                Styles.mobCont,
                                !details && {
                                   justifyContent: 'space-between',
                                   flexDirection: 'row',
                                },
                             ]
                        : [Styles.mobApp, { flexDirection: !details ? 'row' : 'column' }],
                  ]}>
                  {details && !isDesktop && (
                     <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                           position: 'absolute',
                           left: 19,
                        }}>
                        <ArrowLeft />
                     </TouchableOpacity>
                  )}

                  <TouchableOpacity
                     disabled={Platform.OS !== 'web'}
                     onPress={() =>
                        Platform.OS === 'web' && window.open('https://realremote.io', '_self')
                     }
                     style={isDesktop ? Styles.textsCont : Styles.mobTextsCont}>
                     {isDesktop ? <RealRemoteLogoSvg /> : <RealRemoteMobLogoSvg />}
                  </TouchableOpacity>

                  <View
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                     }}>
                     {isDesktop && home && (
                        <SearchWeb getSearchData={getSearchData} scrollRef={scrollRef} />
                     )}

                     {isDesktop ? (
                        <TouchableOpacity
                           style={Styles.postJobCont}
                           onPress={() =>
                              window.open('mailto:jobs@realremote.io?subject=I want to post a job')
                           }>
                           <Text style={Styles.postJobText}>Post a job</Text>
                        </TouchableOpacity>
                     ) : (
                        !details && (
                           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <TouchableOpacity
                                 style={{
                                    marginRight: 18,
                                    paddingLeft: 20,
                                    paddingBottom: 16,
                                 }}
                                 onPress={() => {
                                    setSearchFocused(false);
                                    setCancelSearch(true);
                                 }}>
                                 <Image
                                    source={require('../../assets/Search.png')}
                                    style={{ width: 23, height: 23 }}
                                    resizeMode='contain'
                                 />
                              </TouchableOpacity>
                              {Platform.OS !== 'web' && (
                                 <TouchableOpacity
                                    onPress={onPressSubscribeFilter}
                                    style={{
                                       paddingLeft: 10,
                                       paddingRight: 16,
                                       paddingBottom: 16,
                                    }}>
                                    <Image
                                       source={require('../../assets/subscribe.png')}
                                       style={{ width: 22, height: 22 }}
                                       resizeMode='contain'
                                    />
                                 </TouchableOpacity>
                              )}
                           </View>
                        )
                     )}
                  </View>
                  {details && Platform.OS !== 'web' && (
                     <TouchableOpacity
                        onPress={() => onShare()}
                        style={{
                           position: 'absolute',
                           right: 20,
                        }}>
                        <ShareSvg />
                     </TouchableOpacity>
                  )}
               </View>
            ) : (
               <View style={[Platform.OS === 'web' ? Styles.searchCont : Styles.searchAppCont]}>
                  <Animated.View
                     style={[
                        Styles.search,
                        { width: Platform.OS === 'web' && searchFocused ? width - 32 : width - 88 },
                        Platform.OS !== 'web' && animationStyleSearchWidth,
                     ]}>
                     <SearchSvg style={{ marginLeft: 10, marginRight: 6 }} />
                     <TextInput
                        autoFocus
                        style={
                           Platform.OS === 'web'
                              ? [Styles.textInp, { outline: 'none' }]
                              : Styles.textInpApp
                        }
                        value={searchInput}
                        onChangeText={(text) => {
                           setSearchInput(text);
                        }}
                     />
                     {searchInput.length > 0 && (
                        <TouchableOpacity
                           style={{ marginRight: 16 }}
                           onPress={() => {
                              setSearchInput('');
                           }}>
                           <SearchDellSvg />
                        </TouchableOpacity>
                     )}
                  </Animated.View>

                  {cancelSearch && (
                     <TouchableOpacity
                        onPress={() => {
                           setSearchFocused(true);
                           setCancelSearch(false);
                           setSearchInput('');
                        }}
                        style={{
                           alignItems: 'center',
                           justifyContent: 'center',
                           paddingVertical: 8,
                        }}>
                        <Text style={{ color: '#44444F', fontSize: 12, fontWeight: '500' }}>
                           Cancel
                        </Text>
                     </TouchableOpacity>
                  )}
               </View>
            )}

            {!isDesktop && <View style={{ borderBottomWidth: 0.8, borderColor: '#DFE2E8' }} />}
            {isDesktop && home && lineShow && <Animated.View style={[Styles.line]} />}
         </Animated.View>
      </>
   );
}

const Styles = StyleSheet.create({
   searchCont: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 11,
      marginTop: 11,
   },
   cont: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 72,
      marginTop: 32,
      marginBottom: 64,
   },
   mobCont: {
      flex: 1,
      // justifyContent: 'space-between',
      // flexDirection: 'row',
      alignItems: 'center',
      marginTop: 18,
      marginBottom: 16,
      paddingHorizontal: 16,
   },
   textCont: {
      backgroundColor: '#0056EC',
      width: 48,
      height: 48,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   RealRemoteText: {
      marginLeft: 12,
      color: '#171725',
      fontWeight: 'bold',
      fontSize: 21,
   },
   textR: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 24,
   },
   textsCont: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   mobTextsCont: {
      alignItems: 'center',
      paddingBottom: 16,
   },
   postJobCont: {
      backgroundColor: '#171725',
      borderRadius: 8,
      height: 56,
      width: 144,
      justifyContent: 'center',
      alignItems: 'center',
   },
   postJobText: {
      fontFamily: 'SemiBold',
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 16,
   },
   mobTextCont: {
      backgroundColor: '#0056EC',
      width: 24,
      height: 24,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   mobTextR: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 12,
   },
   mobRealRemoteText: {
      marginLeft: 12,
      color: '#171725',
      fontWeight: '500',
      fontSize: 14,
   },
   search: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      alignItems: 'center',
      height: 36,
      borderRadius: 8,
      backgroundColor: '#FAFAFB',
   },
   anim: {
      zIndex: 100,
      backgroundColor: 'white',
      shadowColor: '#585554',
      shadowRadius: 4,
      // marginTop: 76,
   },
   searchAppCont: {
      flexDirection: 'row',
      alignItems: 'center',

      marginTop: 4,
      marginBottom: 10,
   },
   mobApp: {
      marginTop: 10,
      // marginBottom: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      alignItems: 'center',
   },
   textInp: {
      flex: 1,
      height: '100%',
   },
   textInpApp: {
      flex: 1,
      height: '100%',
   },
   line: {
      borderBottomWidth: 0.8,
      borderColor: '#F0F2F5',
   },
});
