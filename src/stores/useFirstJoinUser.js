import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'aniuta';
import { useState, useEffect } from 'react';

const useFirstJoinUser = createStore({
   key: 'FirstJoin',
   Store: () => {
      const [isFirsJoinUser, _setIsFirstJoinUser] = useState(true);

      useEffect(() => {
         onInit();
      }, []);

      const onInit = async () => {
         const val = await AsyncStorage.getItem('isFirsJoinUser');
         if (val) {
            _setIsFirstJoinUser(JSON.parse(val));
         }
      };

      const setIsFirstJoinUser = () => {
         AsyncStorage.setItem('isFirsJoinUser', JSON.stringify(false));
         _setIsFirstJoinUser(false);
      };

      return {
         isFirsJoinUser,
         setIsFirstJoinUser,
      };
   },
});

export default useFirstJoinUser;
