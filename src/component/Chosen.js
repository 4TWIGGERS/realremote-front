import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { WebLocationSvg } from '../../assets/svgs/AllSvgs';
import { useResponsive } from '../stores/index';
import DataAndLocation from './DataAndLocation';

export default function Chosen({ dataById }) {
   const { width } = useResponsive();
   return (
      <>
         <View style={[Styles.v1, { marginLeft: width < 1160 ? 120 : 206 }]}>
            <View style={[Styles.v2]}>
               <Text style={[Styles.texts]}>{dataById?.jobTitle}</Text>
               <DataAndLocation dataById={dataById} />
            </View>

            <View style={[Styles.contChild]}>
               <View style={{ marginTop: -2 }}>
                  <WebLocationSvg style={{ fill: 'green' }} />
               </View>
               <Text style={Styles.korea}>{dataById?.country}</Text>
               {dataById?.city && <Text style={Styles.ellipse}></Text>}

               <Text style={Styles.seoul}>{dataById?.city}</Text>
            </View>

            <View style={{ flex: 1, marginTop: 24 }}>
               <View
                  style={{
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     alignItems: 'center',
                  }}>
                  {dataById?.tags?.map((item, index) => {
                     if (item) {
                        return (
                           <View
                              style={[Styles.languagename, { marginRight: 8, marginBottom: 8 }]}
                              key={index.toString()}>
                              <Text style={Styles.languagetext}>{item}</Text>
                           </View>
                        );
                     }
                  })}
               </View>
            </View>
         </View>
      </>
   );
}
const Styles = StyleSheet.create({
   v1: {
      width: '75%',
      marginTop: 86,
      marginHorizontal: 182,
      zIndex: 1000,
   },
   v2: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
   },
   Image: {
      width: 26,
      height: 26,
   },
   texts: {
      fontFamily: 'SemiBold',
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 8,
   },
   circle: {
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 32,
      borderWidth: 1,
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#0056EC',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
   languagename: {
      backgroundColor: '#F0F1F5',
      borderRadius: 8,

      paddingHorizontal: 12,
      paddingVertical: 8,
   },

   languagetext: {
      fontFamily: 'Medium',
      color: '#44444f',
      fontWeight: '500',
      fontSize: 14,
   },
   contChild: {
      flexDirection: 'row',

      alignItems: 'center',
   },
   korea: {
      fontFamily: 'Medium',
      color: '#0056EC',
      fontWeight: '500',
      fontSize: 16,
      marginLeft: 13,
   },
   ellipse: {
      borderColor: '#D5D5DC',
      color: '#B5B5BE',
      backgroundColor: '#D5D5DC',
      borderRadius: 32,
      borderWidth: 1,
      height: 4,
      width: 4,
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      marginLeft: 10,
   },
   seoul: {
      fontFamily: 'Medium',
      marginHorizontal: 10,
      fontSize: 16,
      fontWeight: '500',
      color: '#B5B5BE',
   },
});
