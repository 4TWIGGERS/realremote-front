import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';

import { useResponsive } from '../stores/index';

export default function ApplyBottom({ dataById }) {
   const { isDesktop, width } = useResponsive();

   function validateEmail(email) {
      console.log(email);
      const re =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }
   const uri = dataById?.link;
   // console.log(dataById?.link);

   return (
      <View style={{ alignItems: 'center' }}>
         <TouchableOpacity
            style={isDesktop ? [Styles.v1, { marginLeft: width < 1200 ? 300 : 477 }] : Styles.mobV1}
            onPress={() => {
               if (Platform.OS === 'web') {
                  if (validateEmail(uri)) {
                     window.open(
                        `mailto:${uri}?subject=Application for ${dataById?.jobTitle}&body=%0D%0A%0D%0A%0D%0A%0D%0A---%0D%0AFrom realremote.io`
                     );
                  } else {
                     window.open(uri);
                  }
               } else {
                  if (validateEmail(uri)) {
                     Linking.openURL(
                        `mailto:${uri}?subject=Application for ${dataById?.jobTitle}&body=%0D%0A%0D%0A%0D%0A%0D%0A---%0D%0AFrom realremote.io`
                     );
                  } else {
                     Linking.openURL(uri);
                  }
               }
            }}>
            <View style={isDesktop ? Styles.v2 : Styles.mobV2}>
               <Text style={isDesktop ? Styles.t1 : Styles.t2}>Apply for the job</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
}

const Styles = StyleSheet.create({
   v1: {
      marginVertical: 72,
      marginHorizontal: 477,
   },
   mobV1: {
      marginVertical: 32,
      paddingHorizontal: 16,
   },
   v2: {
      paddingVertical: 18,
      backgroundColor: '#0056EC',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      width: 485,
   },
   mobV2: {
      width: 342,
      height: 56,
      backgroundColor: '#0056EC',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
   },
   t1: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 24,
      lineHeight: 36,
      color: '#FFFFFF',
   },
   t2: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 14,

      color: '#FFFFFF',
   },
});
