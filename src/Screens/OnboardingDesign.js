import React from 'react';
import { View } from 'react-native';

import OnboardComponent from '../component/OnboardComponent';

export default function OnboardingDesign({ navigation }) {
   return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
         <OnboardComponent design navigation={navigation} />
      </View>
   );
}
