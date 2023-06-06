import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Intro() {
   const openAppStore = () => {
      const link = 'https://apps.apple.com/us/app/hellofriend/id1607364317';

      Linking.canOpenURL(link).then(
         (supported) => {
            supported && Linking.openURL(link);
         },
         (err) => console.log(err)
      );
   };
   const openPlayStore = () => {
      const link = 'https://play.google.com/store/apps/details?id=com.twiggers.realremote';

      Linking.canOpenURL(link).then(
         (supported) => {
            supported && Linking.openURL(link);
         },
         (err) => console.log(err)
      );
   };
   return (
      <View style={{ paddingLeft: 72, marginTop: 67 }}>
         <Text
            style={{
               marginBottom: 10,
               fontWeight: 500,
               color: '#92929D',
               fontSize: 14,
               fontFamily: 'Medium',
            }}>
            Available on
         </Text>
         <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
               onPress={() => {
                  openAppStore();
               }}>
               <Image
                  source={require('../../assets/apple.png')}
                  style={{ width: 173, height: 60 }}
                  resizeMode='contain'
               />
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => {
                  openPlayStore();
               }}>
               <Image
                  source={require('../../assets/android.png')}
                  style={{
                     width: 173,
                     height: 60,
                     marginLeft: 18,
                     // backgroundColor: 'red',
                  }}
                  resizeMode='contain'
               />
            </TouchableOpacity>
         </View>
      </View>
   );
}
