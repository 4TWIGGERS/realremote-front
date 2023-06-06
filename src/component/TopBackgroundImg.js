import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function TopBackgroundImg() {
   return (
      <View style={Styles.imgCont}>
         <Image
            source={require('../../assets/1.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode='contain'
         />
      </View>
   );
}
const Styles = StyleSheet.create({
   imgCont: {
      width: 744,
      height: 600,
      position: 'absolute',
      alignItems: 'center',
      top: 0,
      left: 72,
   },
});
