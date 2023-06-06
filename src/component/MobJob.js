import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import en from '../languages/en';
import Tags from './Tags';

const API_URL = 'https://realremote.io/';

export default function MobJob({ navigation, item }) {
   return (
      <>
         {item?.isAd ? (
            <TouchableOpacity
               onPress={() => {
                  Linking.openURL('https://www.toptal.com/qy5Lo9/worlds-top-talent');
               }}
               style={{
                  height: 141,
                  overflow: 'hidden',
                  borderRadius: 8,
                  marginHorizontal: 16,
                  backgroundColor: 'rgba(32, 78, 207, 0.1)',
                  marginBottom: 8,
               }}>
               <Image
                  resizeMode='contain'
                  source={require('../../assets/toptal.png')}
                  style={{ width: 58, height: 14, left: 16, top: 16 }}
               />
               <Text
                  style={{
                     fontSize: 12,
                     lineHeight: 18,
                     color: '#262D3D',
                     marginTop: 30,
                     marginLeft: 16,
                  }}>
                  The World’s Top Talent,
               </Text>
               <View style={{ flexDirection: 'row' }}>
                  <Text
                     style={{
                        fontSize: 12,
                        lineHeight: 18,
                        color: '#262D3D',
                        marginLeft: 16,
                     }}>
                     On Demand
                  </Text>
                  <Text
                     style={{
                        fontSize: 4,
                        lineHeight: 18,
                        color: '#262D3D',
                        top: 25,
                        left: 16,
                     }}>
                     TM
                  </Text>
               </View>
               <View
                  style={{
                     position: 'absolute',
                     height: 34,
                     width: 105,
                     left: 16,
                     backgroundColor: '#5CC989',
                     borderRadius: 6,
                     justifyContent: 'center',
                     alignItems: 'center',
                     bottom: 16,
                  }}>
                  <Text
                     style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 12,
                        lineHeight: 16,
                        letterSpacing: 0.006,
                        textTransform: 'capitalize',
                     }}>
                     learn more
                  </Text>
               </View>
               <Image
                  resizeMode='contain'
                  source={require('../../assets/toptalwoman.png')}
                  style={{
                     width: 222,
                     height: 169,
                     position: 'absolute',
                     top: -28,
                     right: 0,
                  }}
               />
               <View
                  style={{
                     position: 'absolute',
                     backgroundColor: 'black',
                     borderBottomLeftRadius: 10,
                     width: 26,
                     height: 26,
                     right: 0,
                  }}></View>
               <Text
                  style={{
                     position: 'absolute',
                     width: 26,
                     height: 26,
                     top: 7,
                     right: -6,
                     color: 'white',
                     fontWeight: '500',
                     fontSize: 10,
                     lineHeight: 12,
                     textTransform: 'capitalize',
                  }}>
                  Ad
               </Text>
            </TouchableOpacity>
         ) : (
            <TouchableOpacity
               onPress={() => navigation.navigate('details', { jobId: item._id })}
               style={Styles.cont}>
               <View style={Styles.firsCont}>
                  <View style={Styles.iconCont}>
                     <Image
                        source={{ uri: API_URL + item?.logo }}
                        style={{ width: 30, height: 30 }}
                        resizeMode='contain'
                     />
                  </View>
                  <View style={{ marginLeft: 12 }}>
                     <View style={{}}>
                        <Text
                           numberOfLines={1}
                           ellipsisMode='tail'
                           style={[Styles.uiTitle, { width: item?.hotOrVerified ? 230 : 280 }]}>
                           {item?.jobTitle}
                        </Text>
                        <Text style={Styles.interText}>{item?.name}</Text>
                        <Tags dataById={item} home />
                     </View>
                  </View>
               </View>

               <View style={{ position: 'absolute', right: 12, top: 10 }}>
                  {item?.hotOrVerified === 'verified' && (
                     <View style={[Styles.verCont]}>
                        <Text style={Styles.verText}>{en[item?.hotOrVerified]}</Text>
                     </View>
                  )}
                  {item?.hotOrVerified === 'hot' && (
                     <View style={[Styles.hotCont]}>
                        <Text style={Styles.hotText}>{en[item?.hotOrVerified]}</Text>
                     </View>
                  )}
                  {item?.hotOrVerified === 'Exclusive' && (
                     <View style={[Styles.exclusive]}>
                        <Text style={Styles.exclusiveText}>{item?.hotOrVerified}</Text>
                     </View>
                  )}
               </View>
            </TouchableOpacity>
         )}
      </>
   );
}

const Styles = StyleSheet.create({
   cont: {
      justifyContent: 'space-between',
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingHorizontal: 12,
      paddingVertical: 12,
      marginBottom: 8,
      marginHorizontal: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#F0F2F5',
      overflow: 'hidden',
   },

   firsCont: {
      flexDirection: 'row',
   },
   iconCont: {
      width: 36,
      height: 36,
      backgroundColor: '#FAFAFB',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
   },
   icon: {},
   verCont: {
      backgroundColor: '#ECF3FF',
      borderRadius: 24,
      width: 60,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
   },
   hotCont: {
      backgroundColor: '#FEE9EE',
      borderRadius: 24,
      width: 40,
      height: 20,

      alignItems: 'center',
      justifyContent: 'center',
   },

   uiTitle: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 12,
      color: '#171725',
   },
   verText: {
      fontFamily: 'SemiBold',
      color: '#0056EC',
      fontWeight: '600',
      fontSize: 9,
   },
   hotText: {
      fontFamily: 'SemiBold',
      color: '#EE156A',
      fontWeight: '600',
      fontSize: 9,
   },
   interText: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 9,
      color: '#92929D',
      marginVertical: 8,
   },

   dayText: {
      color: '#0062FF',
      fontWeight: '600',
      fontSize: 11,
   },
   dayCont: {
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'flex-end',
   },
   loc: {
      width: 20,
      height: 20,
   },
   exclusive: {
      width: 66,
      height: 20,
      backgroundColor: '#FFEDE0',
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
   },
   exclusiveText: {
      fontFamily: 'SemiBold',
      color: '#FF7F20',
      fontSize: 9,
      fontWeight: '600',
   },
});
