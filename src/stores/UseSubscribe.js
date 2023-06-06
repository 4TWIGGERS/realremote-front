import { createStore } from 'aniuta';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { RuntimeConst } from '../utils';

const useSubscribe = createStore({
   name: 'SubscriptionStore',
   Store: () => {
      const initialState = [];
      const [selectedSubs, _setSelectedSubs] = useState(initialState);

      const toggleSelection = (title) => {
         const arr = [...selectedSubs];
         if (arr.includes(title)) {
            arr.splice(arr.indexOf(title), 1);
         } else {
            arr.push(title);
         }
         _setSelectedSubs(arr);
      };

      const clearSelectedSubs = () => {
         _setSelectedSubs(initialState);
      };

      const setSubscriptions = async () => {
         try {
            const res = await axios.put('https://realremote.io/tags/edit', {
               expoToken: RuntimeConst.token,
               tags: selectedSubs,
            });
            return res.status;
         } catch {
            return null;
         }
      };

      return {
         selectedSubs,
         toggleSelection,
         clearSelectedSubs,
         setSubscriptions,
         _setSelectedSubs,
      };
   },
});

export default useSubscribe;
