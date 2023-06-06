import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MobButtonSvg } from '../../assets/svgs/AllSvgs';
import { useResponsive } from '../stores/index';

const ButtCategories = ['Software Development', 'Design', 'Management', 'Information Technology'];

export default function MobBasicCategories({ setSelectedCategories, selectedCategories, setPage }) {
   const { width } = useResponsive();
   const margins = 48;
   const eachCategoryButtonSize = (width - margins) / 2;

   return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
         {ButtCategories?.map((title, index) => {
            return (
               <TouchableOpacity
                  key={index}
                  // isPressed={selectedCategories.includes(index)}
                  onPress={() => {
                     if (selectedCategories.includes(index)) {
                        setSelectedCategories(selectedCategories.filter((i) => i !== index));
                     } else {
                        setSelectedCategories([...selectedCategories, index]);
                     }
                     setPage(2);
                  }}
                  style={Styles.touch}>
                  <MobButtonSvg
                     eachCategoryButtonSize={eachCategoryButtonSize}
                     isPressed={selectedCategories.includes(index)}
                     title={title}
                  />
                  <View
                     style={{
                        position: 'absolute',
                     }}>
                     <Text
                        style={[
                           Styles.text,
                           { color: selectedCategories.includes(index) ? '#FAFAFB' : '#171725' },
                           { fontWeight: selectedCategories.includes(index) ? '600' : '500' },
                        ]}>
                        {title}
                     </Text>
                  </View>
               </TouchableOpacity>
            );
         })}
      </View>
   );
}
const Styles = StyleSheet.create({
   text: {
      fontFamily: 'Medium',
      color: '#171725',
      fontSize: 12,
      fontWeight: '500',
   },
   touch: {
      marginLeft: 16,
      borderRadius: 8,
      marginTop: 16,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#0056EC',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
   },
});
