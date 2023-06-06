import React from 'react';
import { View } from 'react-native';

import SubscribeMobile from '../component/SubscribeMobile';

const SubscribeDesignMobile = ({ navigation, CloseSubscribeModal }) => {
   return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
         <SubscribeMobile
            designSub
            navigation={navigation}
            CloseSubscribeModal={CloseSubscribeModal}
         />
      </View>
   );
};

export default SubscribeDesignMobile;
