import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import useSubscribe from '../stores/UseSubscribe';
import RuntimeConst from '../utils/RuntimeConst';
import BottomMobile from './BottomMobile';
import GetStarted from './GetStarted';
import OnboardCategories from './OnboardCategories';

const { statusBarHeight } = Constants;

const marginTopTitle = 80 - statusBarHeight;

export default function OnboardingComponent({ started, design, developer, navigation }) {
   const { selectedSubs, toggleSelection } = useSubscribe();

   const pageCircle = useSharedValue(8);
   const pageCircle2 = useSharedValue(8);
   const pageCircle3 = useSharedValue(8);

   const pageCircleStyle = useAnimatedStyle(() => {
      return {
         width: pageCircle.value,
      };
   });
   const pageCircle2Style = useAnimatedStyle(() => {
      return {
         width: pageCircle2.value,
      };
   });

   const pageCircle3Style = useAnimatedStyle(() => {
      return {
         width: pageCircle3.value,
      };
   });

   useEffect(() => {
      if (developer) {
         setTimeout(() => {
            pageCircle.value = withSpring(24, { duration: 500 });
         }, 200);
      } else if (design) {
         setTimeout(() => {
            pageCircle2.value = withSpring(24, { duration: 500 });
         }, 200);
      } else if (started) {
         setTimeout(() => {
            pageCircle3.value = withSpring(24, { duration: 500 });
         }, 200);
      }
   }, []);

   const sendTags = () => {
      if (started) {
         axios
            .post('https://realremote.io/token/subscribe', {
               expoToken: RuntimeConst.token,
               tags: selectedSubs,
            })
            .then((res) => {
               console.log('res', res.data);
            })
            .catch((e) => console.log(e));
      }
   };

   return (
      <View style={{ flex: 1 }}>
         {started ? (
            <GetStarted />
         ) : (
            <ScrollView
               contentContainerStyle={{ backgroundColor: 'white', paddingBottom: 80 }}
               showsVerticalScrollIndicator={false}>
               <View style={{ height: statusBarHeight }} />
               <Text style={Styles.title}>
                  Choose {developer ? 'developer' : design && 'design'} tools you prefer to work on
               </Text>
               <OnboardCategories
                  {...{ developer, design, category: toggleSelection, selectedSubs }}
               />
            </ScrollView>
         )}

         <BottomMobile
            {...{
               pageCircleStyle,
               pageCircle2Style,
               pageCircle3Style,
               design,
               developer,
               started,
               navigation,
               Animated,
               sendTags,
            }}
         />
      </View>
   );
}

const Styles = StyleSheet.create({
   title: {
      marginTop: marginTopTitle,
      fontSize: 24,
      fontWeight: '600',
      fontFamily: 'SemiBold',
      width: 308,
      marginLeft: 24,
      marginBottom: 32,
   },
});
