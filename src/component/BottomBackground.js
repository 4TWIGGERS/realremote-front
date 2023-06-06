import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BottomBackground() {
   return (
      <View style={Styles.bottomImgCont}>
         <Image
            source={require('../../assets/bottomImg.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode='contain'
         />
      </View>
   );
}
const Styles = StyleSheet.create({
   bottomImgCont: {
      width: '50%',
      height: 500,
      position: 'absolute',
      alignItems: 'center',
      bottom: 210,
      right: 110,
   },
});
