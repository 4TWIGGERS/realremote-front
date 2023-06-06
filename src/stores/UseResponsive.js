import { createStore } from 'aniuta';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const useResponsive = createStore({
   name: 'useResponsive',
   Store: () => {
      const [width, setWidth] = useState(Dimensions.get('window').width);
      const isDesktop = width >= 800;
      const [isButtonSelected, setIsButtonSelected] = useState(true);

      return {
         width,
         setWidth,
         isDesktop,
         isButtonSelected,
         setIsButtonSelected,
      };
   },
});

export default useResponsive;
