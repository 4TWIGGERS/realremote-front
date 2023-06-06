import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NotSuccessfulMobSvg, NotSuccssfulSvg } from '../../assets/svgs/AllSvgs';
import { useResponsive } from '../stores/index';

export default function NotSuccessful() {
   const { isDesktop } = useResponsive();
   return (
      <View style={{ marginTop: 80 }}>
         {isDesktop ? (
            <View style={{ alignItems: 'center' }}>
               <NotSuccssfulSvg />
               <Text style={styles.text}>Your search was not successful!</Text>
               <Text style={styles.secondText}>Try new search.</Text>
            </View>
         ) : (
            <View style={{ alignItems: 'center' }}>
               <NotSuccessfulMobSvg />
               <Text style={[styles.text, { fontSize: 16 }]}>Your search was not successful!</Text>
               <Text style={[styles.secondText, { fontSize: 14 }]}>Try new search.</Text>
            </View>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   text: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 22,
      color: '#171725',
      marginTop: 20,
   },
   secondText: {
      fontFamily: 'Medium',
      fontSize: 18,
      fontWeight: '500',
      color: '#171725',
      marginTop: 12,
   },
});
