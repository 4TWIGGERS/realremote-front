import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { WebSearchClear, WebSearchSvg } from '../../assets/svgs/AllSvgs';
import { analyticsLogSearchValue } from '../utils/index';

export let search = '';

function usePrevious(value) {
   const ref = useRef();

   useEffect(() => {
      ref.current = value;
   }, [value]);

   return ref.current;
}

export default function SearchWeb({ getSearchData, scrollRef }) {
   const [focused, setFocused] = useState(false);
   const [searchInput, setSearchInput] = useState('');

   const prevSearch = usePrevious(searchInput);

   useEffect(() => {
      search = searchInput;
      if (!searchInput.length && prevSearch?.length) {
         getSearchData();
      }
   }, [searchInput]);

   return (
      <View style={Styles.inputSearchCont}>
         <View
            style={[
               Styles.inp,
               { borderColor: focused ? '#0056EC' : 'white' },
               { borderWidth: focused ? 1 : 1 },
            ]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
               <WebSearchSvg style={{ marginLeft: 18, marginRight: 14, marginTop: 2 }} />

               <TextInput
                  autoFocus
                  onKeyPress={(e) => {
                     if (e.nativeEvent.key === 'Enter') {
                        getSearchData();
                        analyticsLogSearchValue({ searchInput });
                        scrollRef.current.scrollToOffset({ offset: 465 });
                     }
                  }}
                  placeholder='Find your dream job'
                  placeholderTextColor='#B5B5BE'
                  style={{
                     flex: 1,
                     height: '100%',
                     fontSize: 14,
                     borderWidth: 0,
                     fontWeight: '500',
                     outline: 'none',
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  value={searchInput}
                  onChangeText={(text) => {
                     setSearchInput(text);
                  }}
               />
               {searchInput.length > 0 && (
                  <TouchableOpacity
                     style={{ marginRight: 12 }}
                     onPress={() => {
                        setSearchInput('');
                     }}>
                     <WebSearchClear />
                  </TouchableOpacity>
               )}
            </View>
         </View>
      </View>
   );
}

const Styles = StyleSheet.create({
   inputSearchCont: {
      width: 326,
      borderWidth: 1,
      borderColor: '#ECF3FF',
      marginRight: 24,
      height: 56,
      borderRadius: 8,
   },
   inp: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      height: 48,

      // shadowColor: '#000000',
      // shadowOffset: {
      //    width: 0,
      //    height: 2,
      // },
      // shadowOpacity: 0.08,
      // shadowRadius: 12,
   },
});
