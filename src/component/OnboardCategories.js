import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { designPng, requires } from './DeveloperRequiers';
import OnboardCategoryTouchableOpacity from './OnboardCategoryTouchableOpacity';

const OnboardCategories = ({ design, developer, category, designSub, selectedSubs }) => {
   return (
      <>
         {(design || designSub) && (
            <>
               {designPng.map((item, i) => {
                  return (
                     <OnboardCategoryTouchableOpacity
                        key={i}
                        isSelected={selectedSubs.includes(item._title)}
                        title={item._title}
                        onPress={() => category(item._title)}>
                        <Image source={item.req} style={Styles.img} resizeMode='contain' />
                     </OnboardCategoryTouchableOpacity>
                  );
               })}
            </>
         )}

         {developer && (
            <>
               {requires.map((item, i) => {
                  return (
                     <OnboardCategoryTouchableOpacity
                        key={i}
                        title={item._title}
                        isSelected={selectedSubs.includes(item._title)}
                        onPress={() => category(item._title)}>
                        <Image source={item.req} style={Styles.img} resizeMode='contain' />
                     </OnboardCategoryTouchableOpacity>
                  );
               })}
            </>
         )}
      </>
   );
};

const Styles = StyleSheet.create({
   img: {
      width: 24,
      height: 24,
   },
});

export default OnboardCategories;
