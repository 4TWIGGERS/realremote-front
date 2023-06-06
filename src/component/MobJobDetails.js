import dayjs from 'dayjs';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { MobDelSvg, MobLocationSvg, MobStartSvg, PointSvg } from '../../assets/svgs/AllSvgs';
import en from '../languages/en';
import Tags from './Tags';

const API_URL = 'https://realremote.io/';

export default function MobJobDetails({ dataById }) {
   return (
      <View style={{ flex: 1 }}>
         <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
               <View
                  style={{
                     width: 72,
                     height: 72,
                     backgroundColor: '#FAFAFB',
                     borderRadius: 8,
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginLeft: 16,
                  }}>
                  <Image
                     resizeMode='contain'
                     style={{ width: 56, height: 56 }}
                     source={{ uri: API_URL + dataById?.logo }}
                  />
               </View>
            </View>
            <View style={{ flex: 1.5 }}>
               <View style={{ flexDirection: 'row', marginTop: 2, alignItems: 'center' }}>
                  <Text
                     style={{
                        fontFamily: 'SemiBold',
                        color: '#171725',
                        fontSize: 14,
                        fontWeight: '600',
                     }}>
                     {dataById?.jobTitle}
                  </Text>
                  <View style={{ marginLeft: 4 }}>
                     {dataById?.hotOrVerified === 'hot' && (
                        <View style={[Styles.hotCont]}>
                           <Text style={Styles.hotText}>{en[dataById?.hotOrVerified]}</Text>
                        </View>
                     )}
                     {dataById?.hotOrVerified === 'verified' && (
                        <View style={[Styles.verCont]}>
                           <Text style={Styles.verText}>{en[dataById?.hotOrVerified]}</Text>
                        </View>
                     )}
                     {dataById?.hotOrVerified === 'Exclusive' && (
                        <View style={[Styles.exclusive]}>
                           <Text style={Styles.exclusiveText}>{dataById?.hotOrVerified}</Text>
                        </View>
                     )}
                  </View>
               </View>

               <Text
                  style={{ fontWeight: '500', fontSize: 12, color: '#92929D', marginVertical: 8 }}>
                  {dataById?.name}
               </Text>
               {!!dataById?.country && (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <MobLocationSvg />
                     <Text
                        style={{
                           color: '#0056EC',
                           fontSize: 11,
                           fontWeight: '500',
                           marginLeft: 4,
                        }}>
                        {dataById?.country}
                     </Text>

                     <PointSvg style={{ marginHorizontal: 4, marginTop: 2 }} />

                     <Text style={{ color: '#B5B5BE', fontSize: 11, fontWeight: '500' }}>
                        {dataById?.city}
                     </Text>
                  </View>
               )}
            </View>
         </View>

         {dataById ? (
            <View>
               <View style={{ marginLeft: 16 }}>
                  <Text
                     style={{
                        fontFamily: 'SemiBold',
                        marginTop: 16,
                        marginBottom: 8,
                        color: '#171725',
                        fontWeight: '600',
                        fontSize: 11,
                     }}>
                     Tags
                  </Text>
                  <Tags {...{ dataById }} />
               </View>

               <View style={{ marginLeft: 16 }}>
                  <Text
                     style={{
                        fontFamily: 'SemiBold',
                        marginTop: 24,
                        marginBottom: 8,
                        color: '#171725',
                        fontWeight: '600',
                        fontSize: 11,
                     }}>
                     Dates
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MobStartSvg />

                        <Text style={[Styles.dateText, { marginLeft: 6 }]}>
                           {dayjs(dataById?.startDate).format('MMM DD, YYYY')}
                        </Text>
                     </View>
                     {dataById?.endDate ? (
                        <View
                           style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 14 }}>
                           <MobDelSvg />
                           <Text style={[Styles.dateText, { marginLeft: 6 }]}>
                              {dayjs(dataById?.endDate).format('MMM DD, YYYY')}
                           </Text>
                        </View>
                     ) : null}
                  </View>
               </View>
            </View>
         ) : (
            <View style={{ height: 119 }} />
         )}
      </View>
   );
}

const Styles = StyleSheet.create({
   hotCont: {
      backgroundColor: '#FEE9EE',
      borderRadius: 24,
      width: 45,
      height: 20,
      // marginLeft: 8,
      marginRight: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   verCont: {
      backgroundColor: '#D5F3EC',
      borderRadius: 24,
      width: 60,
      height: 20,
      // marginLeft: 8,
      marginRight: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   verText: {
      fontFamily: 'SemiBold',
      color: '#009F92',
      fontWeight: '600',
      fontSize: 9,
      marginTop: 2,
   },
   hotText: {
      fontFamily: 'SemiBold',
      color: '#EE156A',
      fontWeight: '600',
      fontSize: 12,
   },
   dateText: {
      color: '#44444F',
      fontWeight: '500',
      fontSize: 12,
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
      marginTop: 2,
   },
});
