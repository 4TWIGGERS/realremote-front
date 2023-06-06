import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useResponsive } from '../stores/index';

export default function About({ dataById }) {
   const { isDesktop, width } = useResponsive();

   return (
      <View
         style={
            isDesktop ? [Styles.cont, { marginLeft: width < 1160 ? 120 : 182 }] : Styles.mobCont
         }>
         {!!dataById?.description && (
            <View>
               <Text style={isDesktop ? Styles.h1 : Styles.mobH1}>Job Description</Text>
               <Text style={isDesktop ? Styles.h3 : Styles.moBh3}>{dataById?.description}</Text>
            </View>
         )}

         <View style={isDesktop ? Styles.qualificCont : Styles.mobQualificCont}>
            {dataById?.responsibilities?.length > 0 && (
               <Text style={isDesktop ? Styles.h1 : Styles.mobH1}>Responsibilities</Text>
            )}

            {dataById?.responsibilities?.map((item, index) => {
               return (
                  <View key={index} style={Styles.circleItemCont}>
                     <View style={isDesktop ? Styles.circle : Styles.MobCircle} />
                     <Text style={isDesktop ? Styles.h4 : Styles.MobH4}>{item}</Text>
                  </View>
               );
            })}
         </View>
         <View style={isDesktop ? Styles.qualificCont : Styles.mobQualificCont}>
            {dataById?.qualifications?.length > 0 && (
               <Text style={isDesktop ? Styles.h1 : Styles.mobH1}>Qualifications</Text>
            )}

            {dataById?.qualifications?.map((item, index) => {
               return (
                  <View key={index} style={Styles.circleItemCont}>
                     <View style={isDesktop ? Styles.circle : Styles.MobCircle} />
                     <Text style={isDesktop ? Styles.h4 : Styles.MobH4}>{item}</Text>
                  </View>
               );
            })}
         </View>
         <View style={isDesktop ? Styles.offerCont : Styles.mobOfferCont}>
            {dataById?.whatWeOffer?.length > 0 && (
               <Text style={isDesktop ? Styles.h1 : Styles.mobH1}>What We Offer</Text>
            )}

            {dataById?.whatWeOffer?.map((item, index) => {
               return (
                  <View key={index} style={{ flexDirection: 'row', marginBottom: 6 }}>
                     <View style={isDesktop ? Styles.circle : Styles.MobCircle} />
                     <Text style={isDesktop ? Styles.h4 : Styles.MobH4}>{item}</Text>
                  </View>
               );
            })}
         </View>
      </View>
   );
}

const Styles = StyleSheet.create({
   cont: {
      marginHorizontal: 182,
      marginTop: 72,
   },
   mobCont: {
      marginTop: 24,
      paddingHorizontal: 16,
   },
   circleItemCont: {
      flexDirection: 'row',
      marginBottom: 6,
   },
   h1: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 24,
      color: '#171725',
      lineHeight: 36,
      marginBottom: 24,
   },
   mobH1: {
      fontFamily: 'SemiBold',
      color: '#171725',
      fontSize: 14,
      fontWeight: '600',
      marginBottom: 8,
   },
   h3: {
      fontFamily: 'Regular',
      fontWeight: '400',
      fontSize: 18,
      lineHeight: 27,
      color: '#696974',
   },
   qualificCont: {
      marginTop: 64,
   },
   mobQualificCont: {
      marginTop: 24,
   },
   moBh3: {
      fontFamily: 'Regular',
      fontSize: 11,
      color: '#696974',
      lineHeight: 16,
   },
   circle: {
      borderRadius: 99,
      borderWidth: 2,
      width: 12,
      height: 12,
      borderColor: '#0056EC',
      marginVertical: 6,
   },
   h4: {
      fontFamily: 'Regular',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      color: '#44444F',
      marginHorizontal: 12,
   },
   MobH4: {
      fontFamily: 'Medium',
      fontSize: 11,
      color: '#44444F',
      marginHorizontal: 12,
      fontWeight: '500',
      lineHeight: 19,
   },
   offerCont: {
      marginTop: 64,
   },
   mobOfferCont: {
      marginTop: 24,
   },
   MobCircle: {
      width: 8,
      height: 8,
      borderColor: '#0056EC',
      borderRadius: 99,
      borderWidth: 2,
      marginVertical: 6,
   },
});
