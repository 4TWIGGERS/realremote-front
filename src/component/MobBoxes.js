import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import en from '../languages/en';

export default function MobBoxes({ dataById }) {
   return (
      <View style={Styles.V1}>
         <View style={Styles.box}>
            <View style={{ flexDirection: 'row' }}>
               <View style={[Styles.cont, { borderTopLeftRadius: 8 }]}>
                  <Text style={Styles.text}>Work Level</Text>
                  <Text style={Styles.text2}>{dataById?.workLevel}</Text>
               </View>
               {/* <Text style={Styles.line}></Text> */}
               <View style={[Styles.cont, { borderTopRightRadius: 8, borderLeftWidth: 0 }]}>
                  <Text style={Styles.text}>Employment Type</Text>
                  <Text style={Styles.text2}>{en[dataById?.employmentType]}</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
               <View
                  style={[
                     Styles.cont,
                     { borderBottomLeftRadius: 8, borderTopWidth: 0, borderRightWidth: 0 },
                  ]}>
                  <Text style={Styles.text}>Experience</Text>
                  <Text style={Styles.text2}>{dataById?.experience}</Text>
               </View>
               <View style={[Styles.cont, { borderBottomRightRadius: 8, borderTopWidth: 0 }]}>
                  <Text style={Styles.text}>Offer Salary</Text>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={Styles.text2}>{dataById?.offerSalary}</Text>
                  </View>
               </View>
            </View>
         </View>
      </View>
   );
}

const Styles = StyleSheet.create({
   V1: {
      marginTop: 56,
      marginHorizontal: 16,
      // shadowColor: '#000000',
      // shadowOffset: {
      //    width: 0,
      //    height: 2,
      // },
      // shadowOpacity: 0.08,
      // shadowRadius: 12,
   },
   box: {
      borderRadius: 8,
      // borderWidth: 1,
      borderColor: '#D5D5DC',
      backgroundColor: '#FFFFFF',
      //   flexDirection: 'row',
   },
   text: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 11,
      color: '#B5B5BE',
   },
   text2: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 12,
      color: '#0056EC',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 16,
   },
   line: {
      borderWidth: 1,
      borderColor: '#F0F1F5',
      backgroundColor: '#FFFFFF',
   },
   cont: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#F0F1F5',
      alignItems: 'center',
      paddingVertical: 24,
   },
});
