import dayjs from 'dayjs';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Hoverable } from 'react-native-web-hooks';

import { WebLocationSvg, EndDateWebSvg, StartDateSvg } from '../../assets/svgs/AllSvgs';
import en from '../languages/en';
import { useResponsive } from '../stores/index';

export default function Jobs({ navigation, item }) {
   const { width } = useResponsive();

   const API_URL = 'https://realremote.io/';

   return (
      <Hoverable>
         {(isHovered) => (
            <TouchableOpacity
               accessibilityRole='link'
               href={`/details?jobId=${item._id}`}
               // onPress={() => {
               //    navigation.navigate('details', { jobId: item._id });
               // }}
               onPress={() => Linking.openURL(`details?jobId=${item._id}`)}
               style={[
                  Styles.cont,
                  { backgroundColor: isHovered ? 'white' : 'none' },
                  { shadowRadius: isHovered ? 12 : 0 },
                  { borderColor: isHovered ? 'white' : '#f0f2f5' },
               ]}>
               {!item?.isAd && (
                  <>
                     <View style={Styles.firsCont}>
                        <View style={Styles.iconCont}>
                           <Image
                              source={{ uri: API_URL + item?.logo }}
                              style={Styles.icon}
                              resizeMode='contain'
                           />
                        </View>
                        <View style={{ marginLeft: 12, flex: 1 }}>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 alignItems: 'center',
                              }}>
                              <Text numberOfLines={1} ellipsisMode='tail' style={[Styles.uiTitle]}>
                                 {item?.jobTitle}
                              </Text>

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
                           <View
                              style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
                              <Text style={Styles.interText}>{item?.name}</Text>
                              <View
                                 style={{
                                    flexDirection: 'row',
                                    marginLeft: 16,
                                    alignItems: 'center',
                                 }}>
                                 <WebLocationSvg color />
                                 <Text style={[Styles.countrText]}>{item?.country}</Text>
                              </View>
                           </View>
                        </View>
                     </View>

                     <View
                        style={{
                           flex: 1,
                           flexDirection: 'row',
                           alignItems: 'center',
                        }}>
                        {width > 950 && (
                           <View>
                              <View
                                 style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                 }}>
                                 <StartDateSvg />
                                 <Text style={Styles.dateText}>
                                    {dayjs(item?.startDate).format('MMM DD, YYYY')}
                                 </Text>
                              </View>

                              {item?.endDate ? (
                                 <View
                                    style={{
                                       flexDirection: 'row',
                                       marginTop: 6,
                                       alignItems: 'center',
                                    }}>
                                    <EndDateWebSvg />
                                    <Text style={Styles.dateText}>
                                       {dayjs(item?.endDate).format('MMM DD, YYYY')}
                                    </Text>
                                 </View>
                              ) : null}
                           </View>
                        )}

                        <View style={{ marginRight: 16, flex: 1 }}>
                           <View style={Styles.endCont}>
                              {item?.tags?.map((item, index) => {
                                 if (item) {
                                    return (
                                       <View key={index}>
                                          {index < 3 && (
                                             <View>
                                                <Text style={[Styles.endText]}>{item}</Text>
                                             </View>
                                          )}
                                       </View>
                                    );
                                 }
                              })}
                           </View>
                        </View>
                     </View>
                  </>
               )}
            </TouchableOpacity>
         )}
      </Hoverable>
   );
}

const Styles = StyleSheet.create({
   cont: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 72,
      borderWidth: 1,
      borderColor: '#f0f2f5',
      marginBottom: 12,
      borderRadius: 8,
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
   mobCont: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      borderRadius: 8,
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
   firsCont: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   iconCont: {
      width: 64,
      height: 64,
      backgroundColor: '#FAFAFB',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
      marginLeft: 16,
   },
   icon: {
      width: 36,
      height: 36,
   },
   verCont: {
      // backgroundColor: '#FEE9EE',
      backgroundColor: '#ECF3FF',

      borderRadius: 24,
      width: 80,
      paddingVertical: 5,
      marginLeft: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   hotCont: {
      backgroundColor: '#FEE9EE',

      borderRadius: 24,
      width: 53,
      paddingVertical: 5,
      marginLeft: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   endText: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 12,
      backgroundColor: '#F0F1F5',
      borderRadius: 4,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginLeft: 8,
      color: '#696974',
      marginTop: 8,
   },
   uiTitle: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 18,
      color: '#171725',
      maxWidth: 400,
   },

   verText: {
      fontFamily: 'SemiBold',
      color: '#0056EC',
      fontWeight: '600',
      fontSize: 12,
   },
   hotText: {
      fontFamily: 'SemiBold',
      color: '#EE156A',
      fontWeight: '600',
      fontSize: 12,
   },
   interText: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 14,
      color: '#92929D',
   },
   countrText: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 14,
      color: '#44444F',
      marginLeft: 4,
   },
   dateText: {
      color: '#44444F',
      fontWeight: '500',
      fontSize: 14,
      marginLeft: 8,
   },
   dayText: {
      color: '#0062FF',
      fontWeight: '600',
      fontSize: 14,
   },
   dayCont: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 14,
   },
   loc: {
      width: 20,
      height: 20,
   },
   endCont: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   mobEndCont: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   exclusive: {
      backgroundColor: '#FFEDE0',
      width: 88,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 16,
      paddingVertical: 5,
   },
   exclusiveText: {
      fontFamily: 'SemiBold',
      color: '#FF7F20',
      fontSize: 12,
      fontWeight: '600',
   },
});
