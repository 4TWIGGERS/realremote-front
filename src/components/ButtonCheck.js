import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { CheckSvg } from '../../assets/svgs/AllSvgs';

export default function ButtonCheck({ style, check }) {
   return (
      <View
         style={[
            style,
            { backgroundColor: check ? '#0062FF' : 'white' },
            { alignItems: 'center' },
         ]}>
         <CheckSvg />
      </View>
   );
}
