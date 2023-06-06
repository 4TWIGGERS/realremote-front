import { createStore } from 'aniuta';
import { useState } from 'react';

const userIsLoggedIn = createStore({
   name: 'userIsLoggedIn',
   Store: () => {
      const [isLoggedIn, setIsLoggedIn] = useState();

      return {
         isLoggedIn,
         setIsLoggedIn,
      };
   },
});

export default userIsLoggedIn;
