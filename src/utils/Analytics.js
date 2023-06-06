import * as Analytics from 'expo-firebase-analytics';

export function analyticsLogScreen({ screen, jobId }) {
   Analytics.logEvent('screen_view', { screen_name: screen, jobId });
}
export function analyticsLogSearchValue({ searchInput }) {
   Analytics.logEvent(searchInput);
}
export function analyticsLogSubscribeArr({ subscribeArr }) {
   Analytics.logEvent('Subscribe', {
      items: subscribeArr,
   });
}
