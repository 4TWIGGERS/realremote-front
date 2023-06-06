import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function LoadMore({ getJobs, setPage, page }) {
   return (
      <TouchableOpacity
         onPress={() => {
            getJobs(false);
            setPage(page + 1);
         }}
         style={{
            backgroundColor: '#0056EC',
            paddingVertical: 16,
            paddingHorizontal: 32,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            // marginTop: 20,
         }}>
         <Text style={{ fontFamily: 'Medium', fontSize: 14, fontWeight: '500', color: '#FFFFFF' }}>
            Load more
         </Text>
      </TouchableOpacity>
   );
}
