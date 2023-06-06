import React from 'react';
import { View, Text } from 'react-native';

export default function ChooseCategoryTitle() {
   return (
      <View style={{ marginTop: 24, paddingLeft: 16 }}>
         <Text
            style={{
               fontFamily: 'SemiBold',
               fontWeight: '600',
               fontSize: 16,
               color: '#171725',
            }}>
            Choose Category
         </Text>
      </View>
   );
}
