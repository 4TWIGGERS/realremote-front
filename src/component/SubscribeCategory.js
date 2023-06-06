import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SubscribeCategory({ title, setChosenCategories, chosenCategories }) {
   const [borderColorChanged, setBorderColorChanged] = useState(false);
   return (
      <TouchableOpacity
         onPress={() => {
            setBorderColorChanged(!borderColorChanged);
            const arr = [...chosenCategories];

            if (!arr.includes(title)) {
               arr.push(title);
               setChosenCategories(arr);
            } else if (arr.includes(title)) {
               arr.splice(arr.indexOf(title), 1);
               setChosenCategories(arr);
            }
         }}
         style={[
            Styles.categoryCont,
            { borderWidth: borderColorChanged ? 1 : 1 },
            { borderColor: borderColorChanged ? '#0056EC' : 'white' },
         ]}>
         <Text style={Styles.title}>{title}</Text>
      </TouchableOpacity>
   );
}
const Styles = StyleSheet.create({
   categoryCont: {
      backgroundColor: '#FFFFFF',
      marginBottom: 12,
      height: 52,
      paddingLeft: 16,
      // alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      shadowColor: '#000000',
      shadowOffset: {
         width: 2,
         height: 2,
      },
      shadowOpacity: 0.06,
      shadowRadius: 12,
   },
   title: {
      fontFamily: 'Medium',
      color: '#171725',
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 0.2,
   },
});
