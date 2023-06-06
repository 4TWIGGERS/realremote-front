import React from 'react';
import { View, Image } from 'react-native';

import { CaSvg, FrSvg, MiddleSvg, SwingwSvg } from '../../assets/svgs/AllSvgs';

export default function Wtf() {
   return (
      <View style={{ width: 350, height: 350, marginRight: 20 }}>
         <View style={{ position: 'absolute', top: 98, left: -14, zIndex: 100 }}>
            <Image
               source={require('../../assets/3.png')}
               style={{ width: 50, height: 50 }}
               resizeMode='cover'
            />
         </View>
         <View style={{ position: 'absolute', top: -10, left: 80, zIndex: 100 }}>
            <FrSvg />
         </View>
         <View style={{ position: 'absolute', top: 98, right: -25, zIndex: 100 }}>
            <Image
               source={require('../../assets/4.png')}
               style={{ width: 64, height: 64 }}
               resizeMode='cover'
            />
         </View>
         <View style={{ position: 'absolute', right: 35, bottom: 8, zIndex: 100 }}>
            <Image
               source={require('../../assets/2.png')}
               style={{ width: 64, height: 64 }}
               resizeMode='cover'
            />
         </View>
         <View style={{ position: 'absolute', zIndex: 100, bottom: 30, left: 18 }}>
            <SwingwSvg />
         </View>

         <View
            style={{
               borderColor: '#ECF3FF',
               borderWidth: 2,
               width: '100%',
               height: '100%',
               borderRadius: 200,
               padding: 48,
            }}>
            <View
               style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 200,
                  backgroundColor: '#ECF3FF',
                  padding: 48,
               }}>
               <View
                  style={{
                     width: '100%',
                     height: '100%',
                     borderRadius: 200,
                     backgroundColor: 'white',
                  }}>
                  <View
                     style={{
                        position: 'absolute',
                        top: -20,
                        right: 40,
                        zIndex: 100,
                     }}>
                     <Image
                        source={require('../../assets/5.png')}
                        style={{ width: 50, height: 50 }}
                        resizeMode='cover'
                     />
                     <View style={{ position: 'absolute', top: 68, right: 9 }}>
                        <MiddleSvg />
                     </View>
                  </View>
                  <View style={{ position: 'absolute', bottom: 4, left: -14 }}>
                     <CaSvg />
                  </View>
               </View>
            </View>
         </View>
      </View>
   );
}
