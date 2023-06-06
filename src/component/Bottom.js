import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { BottomEllipse, MarketingSvg, SupportSvg } from '../../assets/svgs/AllSvgs';
import BottomShit from './BottomShit';

export default function Bottom({ navigation }) {
   return (
      <>
         <View style={{ position: 'absolute', bottom: 260, left: -30 }}>
            <BottomEllipse />
            <View style={{ position: 'absolute', left: 198, top: 50 }}>
               <SupportSvg />
            </View>
         </View>
         <View style={Styles.cont}>
            <Text style={Styles.text}>What</Text>
            <Text style={[Styles.text, { marginHorizontal: 10 }]}>we do</Text>
            <Text style={[Styles.text, { color: '#0056EC', fontSize: 36 }]}>Differently</Text>
         </View>
         <View style={Styles.cont2}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <View style={Styles.blue} />
               <Text style={Styles.botText}>01</Text>
               <Text style={Styles.botText2}>
                  We search through many job-focused online communities
               </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <View style={Styles.blue} />
               <Text style={Styles.botText}>02</Text>
               <Text style={Styles.botText2}>We hand-pick curated job offers</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <View style={Styles.blue} />
               <Text style={Styles.botText}>03</Text>
               <Text style={Styles.botText2}>
                  We turn them into job applications for you to apply
               </Text>
            </View>
         </View>
         <View style={{ position: 'absolute', bottom: 236, left: 40 }}>
            <MarketingSvg />
         </View>
         <View style={{ marginTop: 150 }}>
            <BottomShit navigation={navigation} />
         </View>
      </>
   );
}
const Styles = StyleSheet.create({
   cont: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 96,
   },

   text: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 32,
      color: '#171725',
   },
   botText: {
      color: '#171725',
      fontSize: 48,
      zIndex: 100,
      fontWeight: '500',
   },
   botText2: {
      fontFamily: 'Medium',
      fontSize: 21,
      fontWeight: '500',
      color: '#44444F',
      marginLeft: 24,
      marginVertical: 60,
   },
   blue: {
      position: 'absolute',
      backgroundColor: '#ECF3FF',
      width: 72,
      height: 72,
      borderRadius: 50,
      left: -35,
   },
   cont2: {
      marginTop: 100,
      marginLeft: 292,
      width: '40%',
   },
});
