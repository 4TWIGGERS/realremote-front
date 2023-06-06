import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { RuntimeConst, analyticsLogSubscribeArr } from '../utils';

export default function BottomSubscribeMode({ sendTags, CloseSubscribeModal, selectedSubs }) {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
            activeOpacity={0.75}
            style={Styles.button}
            onPress={() => {
               analyticsLogSubscribeArr({ subscribeArr: selectedSubs });
               sendTags();
               CloseSubscribeModal();
               if (RuntimeConst.finalStatus !== 'granted') {
                  alert(
                     'To receive notifications, change permission settings in the notifications section on your device'
                  );
               }
            }}>
            <Text style={Styles.textNext}>Done</Text>
         </TouchableOpacity>
      </View>
   );
}
const Styles = StyleSheet.create({
   nextCont: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
   },
   textNext: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'SemiBold',
      marginVertical: 18,
   },

   button: {
      backgroundColor: '#0056EC',
      borderTopWidth: 1,
      borderColor: '#E5EBF1',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 24,
      borderRadius: 16,
   },
   container: {
      width: '100%',
      position: 'absolute',
      bottom: 28,
   },
});
