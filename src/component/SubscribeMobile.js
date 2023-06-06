import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import useSubscribe from '../stores/UseSubscribe';
import { RuntimeConst } from '../utils';
import BottomSubscribeMode from './BottomSubscribeMode';
import { designPng, requires } from './DeveloperRequiers';
import OnboardCategoryTouchableOpacity from './OnboardCategoryTouchableOpacity';
import SubscribeMobileHeader from './SubscribeMobileHeader';

const width = Dimensions.get('screen').width;

const strokeWidth = (width - 48) / 2;

export default function SubscribeMobile({ designSub, developer, navigation, CloseSubscribeModal }) {
   const { toggleSelection, selectedSubs, setSubscriptions, _setSelectedSubs } = useSubscribe();
   const [tab, setTab] = useState(true);
   const tabLineLeft = useSharedValue(1);
   const tabLineRight = useSharedValue(0);
   const tabLeftTextColor = useSharedValue(1);
   const tabRightTextColor = useSharedValue(0);

   const onDismiss = () => {
      CloseSubscribeModal();
   };

   const onPressDesign = () => {
      tabLineRight.value = 0;
      tabLineLeft.value = 1;
      tabLeftTextColor.value = 1;
      tabRightTextColor.value = 0;

      setTab(true);
   };
   const onPressDeveloper = () => {
      tabLineLeft.value = 0;
      tabLineRight.value = 1;
      tabLeftTextColor.value = 0;
      tabRightTextColor.value = 1;

      setTab(false);
   };

   const tabLeftTextColorStyle = useAnimatedStyle(() => {
      return {
         color: withTiming(tabLeftTextColor.value ? '#0056EC' : '#454A5B', { duration: 200 }),
      };
   });

   const tabRightTextColorStyle = useAnimatedStyle(() => {
      return {
         color: withTiming(tabRightTextColor.value ? '#0056EC' : '#454A5B', { duration: 200 }),
      };
   });

   const tabLineLeftScaleX = useAnimatedStyle(() => {
      return {
         transform: [
            {
               scaleX: tabLineLeft.value
                  ? withTiming(1, { duration: 220 })
                  : withTiming(0, { duration: 220 }),
            },
         ],
      };
   });
   const tabLineRightScaleX = useAnimatedStyle(() => {
      return {
         transform: [
            {
               scaleX: tabLineRight.value
                  ? withTiming(1, { duration: 220 })
                  : withTiming(0, { duration: 220 }),
            },
         ],
      };
   });

   const fetchSubsData = async () => {
      try {
         const storedSubscriptions = await axios.get(
            `https://realremote.io/tags?expoToken=${RuntimeConst.token}`
         );

         if (storedSubscriptions) {
            const subs = storedSubscriptions?.data?.tags;
            if (subs) {
               _setSelectedSubs(subs);
            }
         }
      } catch (err) {
         _setSelectedSubs([]);
      }
   };
   useEffect(() => {
      fetchSubsData();
   }, []);

   return (
      <View style={{ flex: 1 }}>
         <SubscribeMobileHeader OnPress={onDismiss} />
         <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 24 }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPressDesign}>
               <Animated.Text style={[styles.text, tabLeftTextColorStyle]}>Design</Animated.Text>
               <View>
                  <Animated.View style={[styles.line, tabLineLeftScaleX]} />
                  <Animated.View style={[styles.lineAb]} />
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPressDeveloper}>
               <Animated.Text style={[styles.text, tabRightTextColorStyle]}>
                  Development
               </Animated.Text>
               <View>
                  <Animated.View style={[styles.line, tabLineRightScaleX]} />
                  <Animated.View style={[styles.lineAb]} />
               </View>
            </TouchableOpacity>
         </View>
         {tab ? (
            <BottomSheetScrollView
               contentContainerStyle={styles.contentContainer}
               showsVerticalScrollIndicator={false}>
               {designPng.map((item, i) => {
                  return (
                     <OnboardCategoryTouchableOpacity
                        key={i}
                        title={item._title}
                        isSelected={selectedSubs.includes(item._title)}
                        onPress={() => toggleSelection(item._title)}>
                        <Image source={item.req} style={styles.img} resizeMode='contain' />
                     </OnboardCategoryTouchableOpacity>
                  );
               })}
            </BottomSheetScrollView>
         ) : (
            <BottomSheetScrollView
               contentContainerStyle={styles.contentContainer}
               showsVerticalScrollIndicator={false}>
               {requires.map((item, i) => {
                  return (
                     <OnboardCategoryTouchableOpacity
                        key={i}
                        title={item._title}
                        isSelected={selectedSubs.includes(item._title)}
                        onPress={() => toggleSelection(item._title)}>
                        <Image source={item.req} style={styles.img} resizeMode='contain' />
                     </OnboardCategoryTouchableOpacity>
                  );
               })}
            </BottomSheetScrollView>
         )}

         <BottomSubscribeMode
            {...{
               designSub,
               developer,
               navigation,
               sendTags: setSubscriptions,
               CloseSubscribeModal: onDismiss,
               selectedSubs,
            }}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   contentContainer: {
      paddingBottom: 120,
      marginTop: 24,
   },
   img: {
      width: 24,
      height: 24,
   },
   lineAb: {
      backgroundColor: '#F4F5F8',
      height: 2,
      width: strokeWidth,
      position: 'absolute',
      zIndex: 0,
      borderRadius: 4,
   },
   line: {
      backgroundColor: '#0056EC',
      height: 2,
      width: strokeWidth,
      zIndex: 1000,
      borderRadius: 4,
   },
   text: {
      marginBottom: 16,
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 14,
   },
});
