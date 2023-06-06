import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useFirstJoinUser } from '../stores/index';

export default function BottomMobile({
   navigation,
   pageCircleStyle,
   pageCircle2Style,
   pageCircle3Style,
   design,
   developer,
   Animated,
   started,
   sendTags,
}) {
   const { setIsFirstJoinUser } = useFirstJoinUser();
   return (
      <View style={[Styles.contAnim]}>
         <View style={[Styles.nextCont]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Animated.View
                  style={[
                     Styles.coma,
                     { backgroundColor: design ? '#0056EC' : '#ECF3FF' },
                     // { width: design ? 24 : 8 },
                     pageCircle2Style,
                  ]}
               />
               <Animated.View
                  style={[
                     Styles.coma,
                     { backgroundColor: developer ? '#0056EC' : '#ECF3FF' },
                     // { width: developer ? 24 : 8 },
                     pageCircleStyle,
                  ]}
               />

               <Animated.View
                  style={[
                     Styles.coma,
                     { backgroundColor: started ? '#0056EC' : '#ECF3FF' },
                     // { width: started ? 24 : 8 },
                     pageCircle3Style,
                  ]}
               />
            </View>
            <TouchableOpacity
               onPress={() => {
                  if (design) {
                     navigation.navigate('onboardingDevelopers');
                  } else if (developer) {
                     navigation.navigate('onboardingGetStarted');
                  } else if (started) {
                     setIsFirstJoinUser();
                     sendTags();
                  }
               }}>
               <Text style={Styles.textNext}>Next</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}
const Styles = StyleSheet.create({
   nextCont: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
   },
   textNext: {
      color: '#0056EC',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'SemiBold',
   },
   coma: {
      width: 6,
      height: 6,
      backgroundColor: '#ECF3FF',
      borderRadius: 6,
      marginRight: 6,
   },
   contAnim: {
      position: 'absolute',
      bottom: 0,
      //   backgroundColor: 'rgba(52, 52, 52, 0.8)',
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: 85,
      paddingHorizontal: 24,
      paddingTop: 28,
      borderTopWidth: 1,
      borderColor: '#E5EBF1',
   },
});
