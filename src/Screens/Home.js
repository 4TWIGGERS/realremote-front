import { BottomSheetModal, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet';
import axios from 'axios';
import * as Notifications from 'expo-notifications';
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { View, StyleSheet, Platform, FlatList, BackHandler } from 'react-native';
import Animated, {
   useSharedValue,
   useAnimatedScrollHandler,
   runOnJS,
} from 'react-native-reanimated';

import FooterComponent from '../component/FlatlistFooterComponent';
import FlatHeader from '../component/FlatlistHeaderComponent';
import Header, { searchMob } from '../component/Header';
import Jobs from '../component/Jobs';
import MobJob from '../component/MobJob';
import { search } from '../component/SearchWeb';
import Spinner from '../components/common/Spinner';
import { useResponsive, useSubscribe } from '../stores/index';
import { analyticsLogScreen } from '../utils';
import SubscribeDesignMobile from './SubscribeDesignMobile';

const limit = 10;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function Home({ navigation }) {
   useEffect(() => {
      const logScreenAnalytics = navigation.addListener('focus', () => {
         analyticsLogScreen({ screen: 'Home' });
      });
      return logScreenAnalytics;
   }, [navigation]);
   const [jobs, setJobs] = useState([]);

   const [selectedCategories, setSelectedCategories] = useState([]);

   const [check, setCheck] = useState([]);

   const [lineShow, setLineShow] = useState(false);

   const [page, setPage] = useState(2);

   const [isLoadingMore, setIsLoadingMore] = useState(false);

   const [endReached, setEndReached] = useState(false);

   const [refresh, setRefresh] = useState(false);

   const [successful, setSuccessful] = useState(false);

   const { isDesktop } = useResponsive();
   const { clearSelectedSubs } = useSubscribe();

   const JobItem = isDesktop ? Jobs : MobJob;

   const scrollAnimatedValue = useSharedValue(0);

   const lastNotificationResponse = Notifications.useLastNotificationResponse();

   useEffect(() => {
      if (
         lastNotificationResponse &&
         lastNotificationResponse?.notification?.request?.content?.data?.jobId
      ) {
         navigation.navigate('details', {
            jobId: lastNotificationResponse?.notification?.request?.content?.data?.jobId,
         });
      }
   }, [lastNotificationResponse]);

   const { dismissAll } = useBottomSheetModal();
   const subscribeSheetRef = useRef(null);
   const subscribeSheetSnapPoints = useMemo(() => ['90%'], []);
   const onPressSubscribeFilter = useCallback(() => {
      subscribeSheetRef.current?.present();
   });
   const CloseSubscribeModal = useCallback(() => {
      subscribeSheetRef.current?.dismiss();
   });
   const renderBackdrop = useCallback((props) => {
      return <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />;
   }, []);

   const scrollHandler = useAnimatedScrollHandler((event) => {
      scrollAnimatedValue.value = event.contentOffset.y;

      if (event.contentOffset.y < 0.1) {
         runOnJS(setLineShow)(false);
      } else if (event.contentOffset.y > 0.1) {
         runOnJS(setLineShow)(true);
      }
   });

   const scrollRef = useRef(null);
   const notSuccessfulRef = useRef(false);

   const onRefresh = () => {
      setRefresh(true);
      getJobs();
   };

   function onEndReached() {
      getJobs(false);
      setPage(page + 1);
   }

   function getJobs(clear = true) {
      setIsLoadingMore(true);

      if (clear) {
         setEndReached(false);
      }
      const categories = [];

      const types = [];

      selectedCategories.forEach((item) => {
         switch (item) {
            case 0:
               categories.push('softwareDevelopment');
               break;
            case 1:
               categories.push('design');
               break;
            case 2:
               categories.push('management');
               break;
            case 3:
               categories.push('informationTechnology');
               break;
         }
      });

      check.forEach((item) => {
         switch (item) {
            case 0:
               types.push('partTime');
               break;
            case 1:
               types.push('fullTime');
               break;
         }
      });

      const searchQuery = search || searchMob;

      const _page = clear ? 1 : page;

      const object = {
         page: _page,
      };
      if (types.length) {
         object.employmentType = types;
      }
      if (categories.length) {
         object.categoryArr = categories;
      }
      if (searchQuery) {
         object.searchString = searchQuery;
      }

      axios
         .post('https://realremote.io/search/job', object)
         .then((res) => {
            // console.log('reeees', res);
            if (clear) {
               setJobs(res.data);
            } else {
               setJobs([...jobs, ...res.data]);
            }
            if (res.data.length < limit) {
               setEndReached(true);
            }

            setIsLoadingMore(false);
            setRefresh(false);
         })
         .catch((e) => {
            console.log(e);
         });
   }
   // const item = { _id: 'itsadd', isAd: true };
   // useEffect(() => {
   //    jobs.splice(2, 0, item);
   //    console.log(jobs[3]);
   // }, [jobs]);
   const item = { _id: 'itsadd', isAd: true };
   useEffect(() => {
      if (!isDesktop && jobs.length)
         if (!jobs[2]?.isAd) {
            jobs?.splice(2, 0, item);
         }
   }, [jobs]);

   useEffect(() => {
      getJobs();
   }, [selectedCategories, check]);

   useEffect(() => {
      if (notSuccessfulRef.current) {
         setSuccessful(true);
      } else {
         notSuccessfulRef.current = true;
      }
   }, [search, searchMob, selectedCategories, check]);

   useEffect(() => {
      const backAction = () => {
         dismissAll();
         return true;
      };
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => backHandler.remove();
   }, []);

   return (
      <View style={isDesktop ? Styles.rootCont : Styles.mobRootCont}>
         <BottomSheetModal
            ref={subscribeSheetRef}
            backgroundStyle={Styles.sheetBackground}
            snapPoints={subscribeSheetSnapPoints}
            backdropComponent={renderBackdrop}
            onDismiss={() => {
               clearSelectedSubs();
            }}>
            <SubscribeDesignMobile
               navigation={navigation}
               CloseSubscribeModal={CloseSubscribeModal}
            />
         </BottomSheetModal>
         {!isDesktop && (
            <Header
               getSearchData={() => getJobs(true)}
               {...{ scrollAnimatedValue, navigation, onPressSubscribeFilter }}
            />
         )}
         {isDesktop && (
            <Header
               home
               getSearchData={() => getJobs(true)}
               {...{ scrollAnimatedValue, navigation, scrollRef, lineShow }}
            />
         )}

         <AnimatedFlatList
            keyboardShouldPersistTaps='handled'
            scrollEventThrottle={16}
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            refreshing={refresh}
            onRefresh={onRefresh}
            progressViewOffset={100}
            contentContainerStyle={[
               Platform.OS === 'web'
                  ? !isDesktop && Styles.contentContStyle
                  : Styles.contentContStyleApp,
            ]}
            onScroll={scrollHandler}
            onEndReached={!isDesktop && !endReached && !isLoadingMore ? () => onEndReached() : null}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={
               <FlatHeader
                  {...{
                     check,
                     setCheck,
                     successful,
                     jobs,
                     setSelectedCategories,
                     selectedCategories,
                     setPage,
                  }}
               />
            }
            ListFooterComponent={
               isDesktop ? (
                  <FooterComponent
                     {...{
                        page,
                        setPage,
                        getJobs,
                        isLoadingMore,
                        endReached,
                        navigation,
                     }}
                  />
               ) : isLoadingMore ? (
                  <Spinner />
               ) : null
            }
            data={jobs}
            keyExtractor={(item) => item?._id?.toString()}
            renderItem={({ item, index }) => {
               return <JobItem {...{ navigation, item, index }} />;
            }}
         />
      </View>
   );
}
const Styles = StyleSheet.create({
   rootCont: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 12,
      width: '100%',
      height: '100%',
   },
   mobRootCont: {
      flex: 1,
      backgroundColor: 'white',
   },
   contentContStyle: {
      paddingBottom: 20,
      // flex: 1,
   },
   contentContStyleApp: {
      // backgroundColor: 'green',
      paddingBottom: 40,
      // flex: 1,
   },
   sheetBackground: {
      backgroundColor: 'white',
   },
});
