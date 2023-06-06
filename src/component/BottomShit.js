import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function BottomShit({ navigation }) {
   const uri = 'https://4twiggers.com/';
   return (
      <View
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 120,
            backgroundColor: '#F9FAFB',
            justifyContent: 'space-between',
            paddingHorizontal: 72,
         }}>
         <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.push('privacyPolicy')}>
               <Text
                  style={{
                     fontSize: 16,
                     color: '#44444F',
                     fontFamily: 'Medium',
                     fontWeight: 500,
                     letterSpacing: 0.4,
                     textDecorationLine: 'underline',
                  }}>
                  Privacy Policy
               </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{
                  marginLeft: 32,
               }}
               onPress={() => navigation.push('termsConditions')}>
               <Text
                  style={{
                     fontSize: 16,
                     color: '#44444F',
                     fontFamily: 'Medium',
                     fontWeight: 500,
                     letterSpacing: 0.4,
                     textDecorationLine: 'underline',
                  }}>
                  Terms and Conditions
               </Text>
            </TouchableOpacity>
         </View>
         <View
            style={{
               flexDirection: 'row',
            }}>
            <Text
               style={{
                  fontSize: 16,
                  color: '#44444F',
                  fontFamily: 'Medium',
                  fontWeight: 500,
                  letterSpacing: 0.4,
               }}>
               Design and development by
            </Text>
            <TouchableOpacity onPress={() => window.open(uri)}>
               <Text
                  style={{
                     fontFamily: 'SemiBold',
                     fontWeight: '700',
                     color: '#171725',
                     fontSize: 16,
                     marginLeft: 8,
                     letterSpacing: 0.4,
                     textDecorationLine: 'underline',
                  }}>
                  4twiggers
               </Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}
