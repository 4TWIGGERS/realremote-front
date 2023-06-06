import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function GetStarted() {
   return (
      <View style={{ alignItems: 'center' }}>
         <View style={{ position: 'absolute' }}>
            <Image
               source={require('../../assets/onboard.png')}
               style={{ width: 322, height: 245, top: 160 }}
            />
         </View>
         <View style={{ alignItems: 'center', marginTop: 424 }}>
            <Text style={Styles.titleFirst}>Get Started!</Text>
            <Text style={[Styles.titleSecond, { marginTop: 8 }]}>Go ahead and find your</Text>
            <Text style={Styles.titleSecond}>dream job. It is waiting for you.</Text>
         </View>
      </View>
   );
}
const Styles = StyleSheet.create({
   titleFirst: {
      fontFamily: 'SemiBold',
      fontSize: 24,
      fontWeight: '600',
      color: '#171725',
   },
   titleSecond: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 16,
      color: '#919AAB',
      width: 250,
      textAlign: 'center',
   },
});
