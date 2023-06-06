import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming,
   useAnimatedGestureHandler,
   withSpring,
} from 'react-native-reanimated';

import { AppDownloadLogo, DownloadCloseSvg } from '../../assets/svgs/AllSvgs';

const DOWNLOAD_HEIGHT = 76;

export default function AppDownload({ setGlobalHeaderAppDownload }) {
   const translateY = useSharedValue(0);
   const translateX = useSharedValue(0);

   const openStore = () => {
      const link = isIOS
         ? 'itms-apps://apps.apple.com/us/app/realremote/id1607364317'
         : isAndroid
         ? 'https://play.google.com/store/apps/details?id=com.twiggers.realremote'
         : '';
      Linking.canOpenURL(link).then(
         (supported) => {
            supported && Linking.openURL(link);
         },
         (err) => console.log(err)
      );
   };

   const animationAppDownload = useSharedValue(0);

   const animatedTranslateStyle = useAnimatedStyle(() => {
      return {
         transform: [
            {
               translateY: animationAppDownload.value,
            },
         ],
      };
   });

   const onGestureEvent = useAnimatedGestureHandler({
      onStart: (event, ctx) => {
         ctx.offsetY = translateY.value;
         ctx.offsetX = translateX.value;
      },
      onActive: (event, ctx) => {
         translateY.value = ctx.offsetY + event.translationY;
         translateX.value = ctx.offsetX + event.translationX;
         console.log('first', event);
      },
      onEnd: () => {
         translateY.value = withSpring(0);
         translateX.value = withSpring(0);
      },
   });
   const animationStyle = useAnimatedStyle(() => {
      return {
         transform: [
            {
               translateY: translateY.value,
            },
            {
               translateX: translateX.value,
            },
         ],
      };
   });

   return (
      <PanGestureHandler {...{ onGestureEvent }}>
         <Animated.View style={[styles.cont, animatedTranslateStyle, animationStyle]}>
            <View style={styles.contChild}>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                     style={{ marginHorizontal: 16 }}
                     onPress={() => {
                        animationAppDownload.value = withTiming(-76, {});
                        setGlobalHeaderAppDownload(false);
                     }}>
                     <DownloadCloseSvg />
                  </TouchableOpacity>
                  <View style={styles.logoCont}>
                     <AppDownloadLogo />
                  </View>
                  <View style={{ marginLeft: 8 }}>
                     <Text style={styles.titleRealRemote}>Real Remote</Text>
                     <Text style={styles.titleDownloadApp}>Download app</Text>
                  </View>
               </View>
               <TouchableOpacity
                  style={styles.buttonDownload}
                  onPress={() => {
                     openStore();
                  }}>
                  <Text style={styles.buttonTitle}>Download</Text>
               </TouchableOpacity>
            </View>
         </Animated.View>
      </PanGestureHandler>
   );
}

const styles = StyleSheet.create({
   cont: {
      height: DOWNLOAD_HEIGHT,
      backgroundColor: '#F4F5F8',
      justifyContent: 'center',
      zIndex: 1000,
      position: 'absolute',
      width: '100%',
   },
   contChild: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   logoCont: {
      backgroundColor: '#0056EC',
      borderRadius: 10,
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
   },
   titleRealRemote: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 14,
      color: '#171725',
      letterSpacing: -0.5,
   },
   titleDownloadApp: {
      fontFamily: 'Medium',
      fontWeight: '500',
      color: '#44444F',
      fontSize: 12,
   },
   buttonDownload: {
      width: 86,
      height: 32,
      backgroundColor: '#171725',
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
   },
   buttonTitle: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 12,
      color: '#FFFFFF',
   },
});
