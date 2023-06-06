import * as StoreReview from 'expo-store-review';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';

import { userAuth } from '../stores';

const CustomModal = ({ setisModal }) => {
   const { getNumOfRated, setNumOfRated, ratedValue, setratedValue, ratedNumber, setratedNumber } =
      userAuth();

   const handleReview = async () => {
      if (await StoreReview.hasAction()) {
         console.log(StoreReview.requestReview());
         StoreReview.requestReview();
      }
   };

   useEffect(() => {
      getNumOfRated();
      setNumOfRated(ratedNumber);
   }, [ratedNumber]);
   return (
      <View style={styles.container}>
         <View
            style={{
               backgroundColor: 'white',
               width: '100%',
               height: 368,
               alignSelf: 'center',
               borderRadius: 12,
               alignItems: 'center',
               paddingHorizontal: 24,
            }}>
            <Image
               resizeMode='contain'
               source={require('../../assets/star.png')}
               style={{ width: 84, height: 84, marginTop: 32 }}
            />
            <Text style={styles.headText}>Enjoying Realremote?</Text>
            <Text style={styles.subText}>
               It won’t take more than a minute. Thanks for your support!
            </Text>
            <TouchableOpacity
               onPress={() => {
                  handleReview();
                  setisModal(false);
                  setratedNumber(ratedNumber + 1);
                  // if (StoreReview.hasAction()) {
                  //    StoreReview.requestReview();
                  //    console.log(StoreReview.requestReview(), 'StoreReview.storeUrl()');
                  // }
               }}
               style={styles.RateButton}>
               <Text style={styles.rateText}>Rate Realremote</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => {
                  setisModal(false);
               }}
               style={{ paddingVertical: 16, width: '100%', height: 52, alignItems: 'center' }}>
               <Text style={styles.NoButton}>No, Thanks</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      zIndex: 100,
      backgroundColor: '#04101666',
      position: 'absolute',
      justifyContent: 'center',
      paddingHorizontal: 16,
   },
   headText: {
      fontFamily: 'SemiBold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.1,
      color: '#171725',
      marginTop: 16,
   },
   subText: {
      width: 241,
      fontFamily: 'Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 21,
      textAlign: 'center',
      letterSpacing: 0.1,
      color: 'rgba(23, 23, 37, 0.9)',
      marginTop: 12,
   },
   RateButton: {
      width: '100%',
      height: 52,
      backgroundColor: '#0056EC',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 48,
   },
   rateText: {
      fontFamily: 'SemiBold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 0.1,
      color: '#FFFFFF',
   },
});

export default CustomModal;
