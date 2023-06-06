import React from 'react';
import { View } from 'react-native';

import OnboardComponent from '../component/OnboardComponent';

export default function OnboardingDevelopers({ navigation }) {
   return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
         <OnboardComponent developer navigation={navigation} />
      </View>
   );
}
