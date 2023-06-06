import React from 'react';
import { View } from 'react-native';

import SubscribeMobile from '../component/SubscribeMobile';

const SubscribeDeveloperMobile = ({ navigation }) => {
   return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
         <SubscribeMobile developer navigation={navigation} />
      </View>
   );
};

export default SubscribeDeveloperMobile;
