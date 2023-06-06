import dayjs from 'dayjs';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DataAndLocation({ dataById }) {
   return (
      <View style={Styles.cont}>
         {dataById?.endDate ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Text style={Styles.open}>Open Date:</Text>
               <Text style={Styles.data}>{dayjs(dataById?.startDate).format('MMM DD, YYYY')}</Text>
               <Text style={Styles.open}>Close Date:</Text>
               <Text style={Styles.date2}>{dayjs(dataById?.endDate).format('MMM DD, YYYY')}</Text>
            </View>
         ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Text style={Styles.open}>Open Date:</Text>
               <Text style={Styles.data}>{dayjs(dataById?.startDate).format('MMM DD, YYYY')}</Text>
            </View>
         )}
      </View>
   );
}

const Styles = StyleSheet.create({
   cont: {
      flexDirection: 'row',
      marginBottom: 8,
      alignItems: 'center',
   },

   open: {
      fontFamily: 'Medium',
      fontWeight: '500',
      fontSize: 16,
      color: '#92929D',
      marginRight: 8,
   },
   data: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 16,
      color: '#13AC6F',
      marginRight: 16,
   },
   date2: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 16,
      color: '#F12C20',
   },
});
