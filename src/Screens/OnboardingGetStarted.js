import React from 'react';
import { View } from 'react-native';

import OnboardingComponent from '../component/OnboardComponent';

export default function OnboardingGetStarted({ navigation }) {
   return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
         <OnboardingComponent started navigation={navigation} />
      </View>
   );
}
