import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tags({ dataById, home }) {
   return (
      <View style={Styles.endCont}>
         {dataById?.tags?.map((item, index) => {
            if (item) {
               return (
                  <View key={index}>
                     {home ? (
                        index < 3 && (
                           <View style={[Styles.endTextCont]}>
                              <Text style={Styles.endText}>{item}</Text>
                           </View>
                        )
                     ) : (
                        <View key={index} style={[Styles.endTextCont]}>
                           <Text style={Styles.endText}>{item}</Text>
                        </View>
                     )}
                  </View>
               );
            }
         })}
      </View>
   );
}

const Styles = StyleSheet.create({
   endCont: {
      flexDirection: 'row',
      flexWrap: 'wrap',
   },
   endTextCont: {
      backgroundColor: '#F0F1F5',
      borderRadius: 4,
      paddingHorizontal: 12,
      paddingVertical: 3,
      marginRight: 4,
      marginTop: 4,
   },
   endText: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 9,
      color: '#696974',
   },
});
