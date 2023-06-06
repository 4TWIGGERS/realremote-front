import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Platform, Text } from 'react-native';

import { Busfaabra } from '../Screens/Busfaabra';
import Details from '../Screens/Details';
import Home from '../Screens/Home';
import OnboardingDesign from '../Screens/OnboardingDesign';
import OnboardingDevelopers from '../Screens/OnboardingDevelopers';
import OnboardingGetStarted from '../Screens/OnboardingGetStarted';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import SignInScreen from '../Screens/SignInScreen';
// import SignUpScreen from '../Screens/SignUpScreen';
import SubscribeDesignMobile from '../Screens/SubscribeDesignMobile';
import SubscribeDeveloperMobile from '../Screens/SubscribeDeveloperMobile';
import TermsConditions from '../Screens/TermsConditions';
import UnSubscribe from '../Screens/UnSubscribe';
import { analyticsLogScreen } from '../utils/index';

const Stack = createStackNavigator();

function MyStack({ isLoggedIn }) {
   const deepLinking = {
      prefixes: ['https://realremote.io/', 'realremote-96bd1.web.app'],
      config: {
         Home: '',
         Details: {
            path: 'details/:jobId',
         },
      },
   };

   const { SlideFromRightIOS } = TransitionPresets;

   return (
      <NavigationContainer linking={deepLinking} fallback={<Text>Loading...</Text>}>
         <Stack.Navigator headerMode='none'>
            {isLoggedIn && Platform.OS !== 'web' ? (
               <>
                  <Stack.Screen
                     options={{ title: 'Real Remote' }}
                     name='onboardingDesign'
                     component={OnboardingDesign}
                  />
                  <Stack.Screen
                     options={{ title: 'Real Remote' }}
                     name='onboardingDevelopers'
                     component={OnboardingDevelopers}
                  />
                  <Stack.Screen
                     options={{ title: 'Real Remote' }}
                     name='onboardingGetStarted'
                     component={OnboardingGetStarted}
                  />
               </>
            ) : (
               <Stack.Screen name='Home' component={Home} options={{ title: 'Real Remote' }} />
            )}

            <Stack.Screen
               options={{ title: 'Real Remote', gestureEnabled: true }}
               name='details'
               component={Details}
            />
            <Stack.Screen name='SubscribeDesignMobile' component={SubscribeDesignMobile} />
            <Stack.Screen name='SubscribeDeveloperMobile' component={SubscribeDeveloperMobile} />
            <Stack.Screen
               options={{ title: 'Real Remote' }}
               name='UnSubscribe'
               component={UnSubscribe}
            />

            <Stack.Screen
               options={{ title: 'Real Remote' }}
               name='termsConditions'
               component={TermsConditions}
            />
            <Stack.Screen
               options={{ title: 'Real Remote' }}
               name='privacyPolicy'
               component={PrivacyPolicy}
            />
            {/* <Stack.Screen name='SubscribeStackScreen' component={SubscribeStackScreen} /> */}
            {/* <Stack.Screen name='SignUpScreen' component={SignUpScreen} /> */}
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='busfaabra' component={Busfaabra} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default MyStack;
