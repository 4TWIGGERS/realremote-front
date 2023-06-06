import React from 'react';
import { View, StyleSheet } from 'react-native';

import { HoverableButton } from '../components/touchable';

const categories = ['Software Development', 'Design', 'Management', 'Information Technology'];

export default function WebBasicCategories({ selectedCategories, setSelectedCategories, setPage }) {
   return (
      <View style={Styles.cont}>
         {categories?.map((item, index) => {
            return (
               <HoverableButton
                  key={index}
                  isPressed={selectedCategories.includes(index)}
                  onPress={() => {
                     if (selectedCategories.includes(index)) {
                        setSelectedCategories(selectedCategories.filter((i) => i !== index));
                     } else {
                        setSelectedCategories([...selectedCategories, index]);
                     }
                     setPage(2);
                  }}
                  text={item}
                  textColor={{ true: 'white', false: 'none' }}
                  style={[Styles.textCont, { marginLeft: index ? 24 : 0 }]}
                  textStyle={Styles.text}
               />
            );
         })}
      </View>
   );
}

const Styles = StyleSheet.create({
   cont: {
      flexDirection: 'row',
      marginHorizontal: 72,
      marginTop: 104,
   },
   textCont: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#0056EC',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
   text: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 14,
   },
});
