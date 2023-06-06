import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PortalProvider } from '@gorhom/portal';
import { Provider } from 'aniuta';
import React, { useEffect } from 'react';

import Application from './src/component/Application';

export default function App() {
   return (
      <Provider>
         <PortalProvider>
            <BottomSheetModalProvider>
               <Application />
            </BottomSheetModalProvider>
         </PortalProvider>
      </Provider>
   );
}
