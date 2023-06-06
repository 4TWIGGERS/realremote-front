import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import en from '../languages/en';
import { useResponsive } from '../stores/index';

export default function Boxes({ dataById }) {
   const { width } = useResponsive();
   return (
      <View style={[Styles.V1, { marginLeft: width < 1160 ? 120 : 182 }]}>
         <View style={Styles.box}>
            <View
               style={[
                  Styles.cont,
                  { borderTopLeftRadius: 8, borderBottomLeftRadius: 8, borderRightWidth: 0 },
               ]}>
               <Text style={Styles.text}>Work Level</Text>
               <Text style={Styles.text2}>{dataById?.workLevel}</Text>
            </View>

            <View style={[Styles.cont, { borderRightWidth: 0 }]}>
               <Text style={Styles.text}>Employment Type</Text>
               <Text style={Styles.text2}>{en[dataById?.employmentType]}</Text>
            </View>

            <View style={[Styles.cont, { borderRightWidth: 0 }]}>
               <Text style={Styles.text}>Experience</Text>
               <Text style={Styles.text2}>{dataById?.experience}</Text>
            </View>

            <View style={[Styles.cont, { borderTopRightRadius: 8, borderBottomRightRadius: 8 }]}>
               <Text style={Styles.text}>Offer Salary</Text>
               <View style={{ flexDirection: 'row' }}>
                  <Text style={Styles.text2}>{dataById?.offerSalary}</Text>
               </View>
            </View>
         </View>
      </View>
   );
}

const Styles = StyleSheet.create({
   V1: {
      marginHorizontal: 184,
      marginTop: 32,
      width: '75%',
   },
   box: {
      borderRadius: 8,
      // borderWidth: 1,
      borderColor: '#f0f2f5',
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   text: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 16,
      color: '#B5B5BE',
   },
   text2: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 16,
      color: '#0056EC',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 16,
   },
   line: {
      borderWidth: 1,
      borderColor: '#f0f2f5',
      backgroundColor: '#FFFFFF',
   },
   cont: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#F0F2F5',
      alignItems: 'center',
      paddingVertical: 24,
      justifyContent: 'center',
      height: 112,
   },
});
