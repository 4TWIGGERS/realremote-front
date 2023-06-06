import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SubscribeMobileHeader = ({ OnPress }) => {
   return (
      <View>
         <View style={styles.cont}>
            <Text style={styles.text}>Choose Tools</Text>
            <TouchableOpacity style={styles.button} onPress={OnPress}>
               <Image style={styles.image} source={require('../../assets/close.png')} />
            </TouchableOpacity>
         </View>
         <View style={styles.stroke} />
      </View>
   );
};

export default SubscribeMobileHeader;

const styles = StyleSheet.create({
   text: {
      fontFamily: 'SemiBold',
      fontSize: 16,
      fontWeight: '600',

      marginLeft: 24,
      color: '#171725',
   },
   image: {
      width: 12,
      height: 12,
   },
   cont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   button: {
      position: 'absolute',
      right: 0,
      paddingHorizontal: 26,
      paddingVertical: 20,
   },
   stroke: {
      backgroundColor: '#E5EBF1',
      height: 1,
      width: '100%',
      marginTop: 20,
   },
});
