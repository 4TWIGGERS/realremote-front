import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OnboardCategoryTouchableOpacity({ children, title, onPress, isSelected }) {
   return (
      <TouchableOpacity
         style={[Styles.cont, { borderColor: isSelected ? '#0056EC' : 'transparent' }]}
         onPress={onPress}>
         <View style={Styles.contChild}>
            <View style={Styles.WhiteCircle}>{children}</View>
            <Text style={Styles.text}>{title}</Text>
         </View>
      </TouchableOpacity>
   );
}

const Styles = StyleSheet.create({
   cont: {
      height: 76,
      backgroundColor: '#F6F9FE',
      marginHorizontal: 24,
      borderRadius: 8,
      justifyContent: 'center',
      marginBottom: 16,
      //   flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'transparent',
   },

   contChild: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   text: {
      fontSize: 16,
      fontWeight: '500',
      color: '#171725',
      marginLeft: 12,
      fontFamily: 'Medium',
   },
   WhiteCircle: {
      backgroundColor: 'white',
      width: 44,
      height: 44,
      borderRadius: 50,
      marginLeft: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
});
