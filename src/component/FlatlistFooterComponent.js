import React from 'react';
import { View } from 'react-native';

import Spinner from '../components/common/Spinner';
import { useResponsive } from '../stores/index';
import Bottom from './Bottom';
import BottomBackground from './BottomBackground';
import LoadMore from './LoadMore';

const FlatFooter = ({ getJobs, endReached, isLoadingMore, navigation, page, setPage }) => {
   return (
      <>
         <View
            style={{
               alignItems: 'center',
               height: 50,
               marginTop: 20,
            }}>
            {!endReached ? (
               isLoadingMore ? (
                  <Spinner size='small' />
               ) : (
                  <LoadMore {...{ getJobs, page, setPage }} />
               )
            ) : null}
         </View>
         <Bottom {...{ navigation }} />
         <BottomBackground />
      </>
   );
};

const FooterComponent = ({ page, setPage, getJobs, isLoadingMore, endReached, navigation }) => {
   const { isDesktop } = useResponsive();
   if (isDesktop)
      return (
         <FlatFooter
            {...{
               page,
               setPage,
               getJobs,
               isLoadingMore,
               endReached,
               navigation,
            }}
         />
      );

   return null;
};

export default FooterComponent;
