// @ts-nocheck
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Hoverable } from 'react-native-web-hooks';

import { WebButtonSvg } from '../../assets/svgs/AllSvgs';
import { useResponsive } from '../stores/index';

export function HoverableButton({ style, text, textStyle, textColor, isPressed, onPress }) {
   const { width } = useResponsive();

   const margin = 216;

   const eachCategoryButtonSizeWeb = (width - margin) / 4;

   return (
      <Hoverable>
         {(isHovered) => {
            return (
               <TouchableOpacity style={style} onPress={onPress}>
                  <WebButtonSvg
                     isHovered={isHovered}
                     eachCategoryButtonSizeWeb={eachCategoryButtonSizeWeb}
                     isPressed={isPressed}
                     // height={68}
                     text={text}
                  />

                  <View
                     style={{
                        position: 'absolute',
                     }}>
                     <Text style={[{ color: textColor[isHovered || isPressed] }, textStyle]}>
                        {text}
                     </Text>
                  </View>
               </TouchableOpacity>
            );
         }}
      </Hoverable>
   );
}
