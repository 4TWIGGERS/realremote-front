import React, { useRef } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
   Extrapolate,
   interpolate,
   useSharedValue,
   useAnimatedScrollHandler,
   useAnimatedStyle,
   useDerivedValue,
   withTiming,
} from 'react-native-reanimated';
import Bus from './Bus';

const gisunashvili = ['busfaabra', 'busfaabra', 'busfaabra', 'busfaabra', 'busfaabra', 'busfaabra'];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HEADER_HEIGHT = 100;

export default function HeaderAnim({ navigation }) {
   const scrollAnimatedValue = useSharedValue(0);

   const scrollHandler = useAnimatedScrollHandler((event) => {
      scrollAnimatedValue.value = event.contentOffset.y;
   });
   const derived = useDerivedValue(() => {
      return interpolate(
         scrollAnimatedValue.value,
         [-HEADER_HEIGHT, 0],
         [HEADER_HEIGHT, 0],
         Extrapolate.CLAMP
      );
   });
   const animatedShadowOpacityStyle = useAnimatedStyle(() => {
      return {
         transform: [
            {
               translateY: derived.value,
            },
         ],
      };
   });
   return (
      <View style={[{ flex: 1 }]}>
         <Animated.View style={[styles.head, animatedShadowOpacityStyle]}>
            <Text>Header</Text>
         </Animated.View>

         <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
            {gisunashvili.map((item) => {
               return (
                  <View style={{ marginTop: 30, height: 300, backgroundColor: 'red' }}>
                     <Text>{item}</Text>
                  </View>
               );
            })}
         </Animated.ScrollView>
         <AnimatedFlatList
            contentContainerStyle={{ flex: 1 }}
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            data={gisunashvili}
            renderItem={({ item }) => {
               return (
                  <View>
                     {/* {item.index===0 && <He} */}
                     <View style={{ marginTop: 30, height: 300, backgroundColor: 'red' }}>
                        <Text>{item}</Text>
                     </View>
                  </View>
               );
            }}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   head: {
      backgroundColor: 'green',
      height: HEADER_HEIGHT,
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      top: 0,
   },
});
