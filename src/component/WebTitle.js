import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useResponsive } from '../stores/index';
import Wtf from './Wtf';

export default function WebTitle() {
   const { width } = useResponsive();

   return (
      <View>
         <View style={Styles.cont}>
            <View>
               <View style={{ flexDirection: 'row' }}>
                  <Text style={Styles.text}>Find real offers for</Text>
                  <Text style={[Styles.text, { color: '#0156EC' }]}> remote </Text>
                  <Text style={Styles.text}>jobs,</Text>
               </View>
               <Text style={Styles.text}>focusing on software development.</Text>
            </View>
         </View>
         <View
            style={{
               position: 'absolute',
               right: 124,
               marginTop: 10,
            }}>
            {width > 1220 && <Wtf />}
         </View>
      </View>
   );
}

const Styles = StyleSheet.create({
   cont: {
      flex: 1,
      marginTop: 80,
      paddingLeft: 72,
   },

   text: {
      fontFamily: 'SemiBold',
      fontSize: 32,
      color: '#171725',
      fontWeight: '600',
      lineHeight: 48,
      letterSpacing: 0.3,
   },
});
