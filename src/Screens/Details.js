import axios from 'axios';
// import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import {
   View,
   StyleSheet,
   Image,
   Text,
   TouchableOpacity,
   BackHandler,
   Platform,
} from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

import About from '../component/About';
import ApplyBottom from '../component/ApplyBottom';
import Boxes from '../component/Boxes';
import Chosen from '../component/Chosen';
import CustomModal from '../component/CustomModal';
import Header from '../component/Header';
import MobBoxes from '../component/MobBoxes';
import MobJobDetails from '../component/MobJobDetails';
import Spinner from '../components/common/Spinner';
import { useResponsive, userAuth } from '../stores/index';
import { analyticsLogScreen } from '../utils';

const API_URL = 'https://realremote.io/';

export default function Details({ route, navigation }) {
   const { width, isDesktop } = useResponsive();
   const { jobId } = route.params;

   const [dataById, setDataById] = useState();
   const [checkDelete, setCheckDelete] = useState(false);

   const {
      isLoggedIn,
      getNumOfClicked,
      setNumOfClicked,
      clickedNumber,
      setclickedNumber,
      clickedValue,
      ratedValue,
   } = userAuth();

   useEffect(() => {
      if (Platform.OS !== 'web') {
         if (clickedValue !== 0) {
            if (clickedValue % 3 === 0) {
               setisModal(true);
            }
         }
      }
      setclickedNumber(clickedNumber + 1);
      const logScreenAnalytics = navigation.addListener('focus', () => {
         analyticsLogScreen({ screen: 'details', jobId });
      });
      return logScreenAnalytics;
   }, [navigation]);

   useEffect(() => {
      getNumOfClicked(setclickedNumber);
      setNumOfClicked(clickedNumber);
   }, [clickedNumber]);

   const scrollAnimatedValue = useSharedValue(0);

   const scrollHandler = useAnimatedScrollHandler((event) => {
      scrollAnimatedValue.value = event.contentOffset.y;
   });

   function getFromFirebase() {
      axios
         .get(`https://realremote.io/find/one/job/?jobId=${jobId}`)
         .then((res) => {
            setDataById(res.data);
            navigation.setOptions({ title: res.data.jobTitle + ' - Real Remote' });
         })
         .catch((e) => console.log(e));
   }

   useEffect(() => {
      getFromFirebase();
   }, []);

   const deleteJob = (jobId) => {
      axios
         .delete(`https://realremote.io/delete/job?jobId=${jobId}`)
         .then((res) => console.log(res));
   };

   const link = `https://realremote.io/details?jobId=${jobId}`;

   // const link = `https://realremote.io/details?-${
   //    dataById?.workLevel
   // }-${dataById?.jobTitle?.replace(/\s/g, '')}-${dataById?.name?.replace(
   //    /\s/g,
   //    ''
   // )}-jobId=${jobId}`;

   // console.log(link);

   useEffect(() => {
      const backAction = () => {
         navigation.goBack();
         return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

      return () => backHandler.remove();
   }, []);

   const [isModal, setisModal] = useState(false);

   return (
      <>
         <View style={isDesktop ? Styles.root : Styles.mobRoot}>
            {!isDesktop && <Header {...{ scrollAnimatedValue, navigation, link }} details />}
            {dataById ? (
               <Animated.ScrollView
                  scrollEventThrottle={16}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={!isDesktop && Styles.contContStyle}
                  onScroll={scrollHandler}>
                  {isDesktop && (
                     <Header {...{ scrollAnimatedValue, route, navigation, link }} details />
                  )}

                  {isDesktop && isLoggedIn && (
                     <>
                        <TouchableOpacity
                           style={Styles.edit}
                           onPress={() => {
                              navigation.navigate('busfaabra', {
                                 edit: true,
                                 jobId: dataById?._id,
                              });
                           }}>
                           <Text style={Styles.text}>edit</Text>
                        </TouchableOpacity>
                        {!checkDelete && (
                           <View style={[Styles.del]}>
                              <TouchableOpacity
                                 style={{ width: 200, height: 50, justifyContent: 'center' }}
                                 onPress={() => {
                                    setCheckDelete(true);
                                 }}>
                                 <Text style={Styles.text}>delete</Text>
                              </TouchableOpacity>
                           </View>
                        )}

                        {checkDelete && (
                           <View style={[Styles.container]}>
                              <TouchableOpacity
                                 style={Styles.yesNo}
                                 onPress={() => {
                                    deleteJob(jobId);
                                    navigation.navigate('Home');
                                 }}>
                                 <Text style={Styles.text}>yes</Text>
                              </TouchableOpacity>

                              <TouchableOpacity
                                 style={Styles.yesNo}
                                 onPress={() => {
                                    setCheckDelete(false);
                                 }}>
                                 <Text style={Styles.text}>no</Text>
                              </TouchableOpacity>
                           </View>
                        )}
                     </>
                  )}

                  {isDesktop && (
                     <>
                        <View style={[Styles.banner, { marginLeft: width < 1160 ? 120 : 182 }]}>
                           <View style={{ position: 'absolute', left: 228, bottom: 16 }}>
                              <Text
                                 style={{
                                    fontFamily: 'Medium',
                                    fontWeight: '500',
                                    fontSize: 28,
                                    color: '#FFFFFF',
                                 }}>
                                 {dataById?.name}
                              </Text>
                           </View>
                           <View style={Styles.backgroundlogo}>
                              <Image
                                 resizeMode='contain'
                                 style={Styles.logo}
                                 source={{ uri: API_URL + dataById?.logo }}
                              />
                           </View>
                        </View>
                        <Chosen {...{ dataById }} />
                        <Boxes {...{ dataById }} />
                     </>
                  )}

                  {!isDesktop && (
                     <>
                        <MobJobDetails {...{ dataById }} />
                        <MobBoxes {...{ dataById }} />
                     </>
                  )}

                  <About {...{ dataById }} />
                  {dataById && <ApplyBottom {...{ dataById }} />}
               </Animated.ScrollView>
            ) : (
               <Spinner style={{ marginTop: 300 }} />
            )}
            {Platform.OS !== 'web' && ratedValue <= 2 && isModal && (
               <CustomModal setisModal={setisModal} />
            )}
         </View>
      </>
   );
}
const Styles = StyleSheet.create({
   root: {
      backgroundColor: 'white',
      borderRadius: 12,
      width: '100%',
      height: '100%',
   },
   mobRoot: {
      flex: 1,
      backgroundColor: 'white',
   },
   banner: {
      width: '75%',
      height: 204,
      backgroundColor: '#0056EC',
      marginHorizontal: 182,
      // marginTop: 64,
      borderRadius: 8,
      position: 'relative',
      zIndex: 1000,
   },
   ellipse: {
      borderRadius: 999,
      borderWidth: 2,
      borderColor: '#ECF3FF',
      height: 850,
      width: 850,
      position: 'absolute',
      top: -386,
      left: -287,
   },
   logo: {
      width: 108,
      height: 108,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
   },
   backgroundlogo: {
      width: 164,
      height: 164,
      backgroundColor: '#FAFAFB',
      position: 'absolute',
      marginTop: 104,
      marginLeft: 24,
      borderRadius: 8,
      zIndex: 1000,
      justifyContent: 'center',
      alignItems: 'center',
   },
   phonev: {
      borderColor: '#0056EC',
      borderRadius: 32,
      borderWidth: 1,
      position: 'absolute',
      marginLeft: 542,
      marginTop: 55,
      zIndex: 1000,
      width: 48,
      height: 48,
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
   },
   contContStyle: {
      paddingTop: 40,
      paddingBottom: 20,
   },
   edit: {
      position: 'absolute',
      width: 200,
      height: 50,
      backgroundColor: 'red',
      right: 400,
      top: 30,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
   },
   del: {
      position: 'absolute',
      width: 200,
      height: 50,
      backgroundColor: 'red',
      right: 700,
      top: 30,
      borderRadius: 8,
      // alignItems: 'center',
      // justifyContent: 'center',
   },
   text: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
   },
   yesNo: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      width: 80,
      height: 50,
      borderRadius: 8,
   },
   container: {
      flexDirection: 'row',
      width: 200,
      position: 'absolute',
      right: 700,
      top: 0,
      paddingTop: 30,
      justifyContent: 'space-around',
      zIndex: 2000,
   },
});
