import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AuthButton({ onPress, title }) {
   return (
      <TouchableOpacity style={Styles.button} onPress={onPress}>
         <Text style={Styles.text}>{title}</Text>
      </TouchableOpacity>
   );
}
const Styles = StyleSheet.create({
   button: {
      borderWidth: 1,
      backgroundColor: 'black',
      marginTop: 10,
      paddingHorizontal: 86,
      paddingVertical: 10,
      borderRadius: 10,
   },
   text: {
      color: 'white',
      fontWeight: '600',
      fontSize: 12,
   },
});
