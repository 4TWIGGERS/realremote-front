import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ButtonCheck from '../components/ButtonCheck';
import { useResponsive } from '../stores/index';

const JobCheck = ['Part-Time', 'Full-Time'];
export default function JobsCheck({ setCheck, check, setPage }) {
   const { isDesktop } = useResponsive();

   return (
      <>
         {isDesktop ? (
            <View style={Styles.cont}>
               <Text style={Styles.firsText}>Latest Jobs</Text>
               <View style={Styles.buttCont}>
                  {JobCheck?.map((item, index) => {
                     return (
                        <TouchableOpacity
                           style={Styles.contS}
                           key={index}
                           onPress={() => {
                              if (check.includes(index)) {
                                 setCheck(check.filter((i) => i !== index));
                              } else {
                                 setCheck([...check, index]);
                              }
                              setPage(2);
                           }}
                           check={check.includes(index)}>
                           <ButtonCheck style={Styles.squ} check={check.includes(index)} />
                           <Text style={Styles.textWeb}>{item}</Text>
                        </TouchableOpacity>
                     );
                  })}
               </View>
            </View>
         ) : (
            <>
               <View style={Styles.mobCont}>
                  <Text style={Styles.mobFirsText}>Latest Jobs</Text>
                  <View style={Styles.mobButtCont}>
                     {JobCheck?.map((item, index) => {
                        return (
                           <TouchableOpacity
                              style={Styles.contS}
                              key={index}
                              onPress={() => {
                                 if (check.includes(index)) {
                                    setCheck(check.filter((i) => i !== index));
                                 } else {
                                    setCheck([...check, index]);
                                 }
                                 setPage(2);
                              }}>
                              <ButtonCheck style={Styles.squ} check={check.includes(index)} />
                              <Text style={Styles.text}>{item}</Text>
                           </TouchableOpacity>
                        );
                     })}
                  </View>
               </View>
            </>
         )}
      </>
   );
}

const Styles = StyleSheet.create({
   cont: {
      marginTop: 72,
      marginBottom: 24,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 72,
   },
   mobCont: {
      marginTop: 48,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 18,
   },
   squ: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#E2E2EA',
      alignContent: 'center',
      justifyContent: 'center',
   },
   textWeb: {
      fontFamily: 'Medium',
      marginLeft: 8,
      fontSize: 16,
      fontWeight: '500',
      color: '#44444F',
      marginTop: 2,
   },
   text: {
      fontFamily: 'Medium',
      marginLeft: 8,
      fontSize: 12,
      fontWeight: '500',
      color: '#44444F',
      marginTop: 2,
   },
   firsText: {
      fontFamily: 'SemiBold',
      color: '#171725',
      fontWeight: '600',
      fontSize: 24,
   },
   mobFirsText: {
      fontFamily: 'SemiBold',
      color: '#171725',
      fontWeight: '600',
      fontSize: 16,

      paddingLeft: 16,
   },
   contS: {
      alignItems: 'center',
      flexDirection: 'row',
      // alignItems: 'center',
      marginLeft: 16,
   },
   buttCont: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
   },
   mobButtCont: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 16,
   },
});
