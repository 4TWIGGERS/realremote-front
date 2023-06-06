import {
   firebaseApiKey,
   firebaseAppId,
   firebaseAuthDomain,
   firebaseMeasurementId,
   firebaseMessagingSenderId,
   firbaseStorageBucket,
   firebaseProjectId,
} from './env';

module.exports = {
   expo: {
      name: 'RealRemote',
      slug: 'RealRemote',
      version: '1.0.45',
      orientation: 'portrait',
      icon: './assets/Logo.png',
      notification: {
         androidMode: 'default',
         icon: './assets/androidNotification.png',
      },
      splash: {
         image: './assets/favicon.png',
         resizeMode: 'contain',
         backgroundColor: '#0056EC',
      },
      updates: {
         fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ['**/*'],
      ios: {
         buildNumber: '41',
         userInterfaceStyle: 'light',
         supportsTablet: false,
         bundleIdentifier: 'com.twiggers.realremote',
         googleServicesFile: './GoogleService-Info.plist',
         appStoreUrl: 'https://apps.apple.com/us/app/hellofriend/id1607364317',
      },
      android: {
         versionCode: 42,
         userInterfaceStyle: 'light',
         adaptiveIcon: {
            foregroundImage: './assets/androidNotification.png',
            backgroundColor: '#0056EC',
         },
         package: 'com.twiggers.realremote',
         googleServicesFile: './google-services.json',
         playStoreUrl: 'https://play.google.com/store/apps/details?id=com.twiggers.realremote',
      },
      web: {
         favicon: './assets/favicon.png',
         config: {
            firebase: {
               appId: firebaseAppId,
               apiKey: firebaseApiKey,
               projectId: firebaseProjectId,
               storageBucket: firbaseStorageBucket,
               messagingSenderId: firebaseMessagingSenderId,
               authDomain: firebaseAuthDomain,

               measurementId: firebaseMeasurementId,
            },
         },
      },
      userInterfaceStyle: 'automatic',
   },
};
