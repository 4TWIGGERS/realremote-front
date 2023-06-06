import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import BottomShit from '../component/BottomShit';
import Header from '../component/Header';
const HowInformation = [
   'Provide, operate, and maintain our website',
   'Improve, personalize, and expand our website',
   'Understand and analyze how you use our website',
   'Develop new products, services, features, and functionality',
   'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information',
   'relating to the website, and for marketing and promotional purposes',
   'Send you emails',
   'Find and prevent fraud',
];

export default function PrivacyPolicy({ navigation }) {
   const scrollAnimatedValue = useSharedValue(0);

   return (
      <ScrollView showsVerticalScrollIndicator='false' style={{ backgroundColor: 'white' }}>
         <Header {...{ scrollAnimatedValue }} />
         <View style={{ position: 'absolute', right: 72, top: 184, zIndex: 1000 }}>
            <Image
               source={require('../../assets/PrivacyPolicy.png')}
               style={{ height: 496, width: 729 }}
            />
         </View>
         <View style={{ marginHorizontal: 72, marginTop: 82, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
               <Text style={[Styles.titleDescription, { fontSize: 37 }]}>Privacy Policy for</Text>
               <Text
                  style={[
                     Styles.titleDescription,
                     { fontSize: 37, color: '#0156EC', marginLeft: 8 },
                  ]}>
                  4twiggers
               </Text>
            </View>
            <View style={{ width: 492, marginTop: 20 }}>
               <Text style={Styles.text}>
                  At Real Remote, accessible from Realremote.io, one of our main priorities is the
                  privacy of our visitors. This Privacy Policy document contains types of
                  information that is collected and recorded by Real Remote and how we use it.
               </Text>
               <Text style={[Styles.text, { marginTop: 16 }]}>
                  If you have additional questions or require more information about our Privacy
                  Policy, do not hesitate to contact us.
               </Text>
               <Text style={[Styles.text, { marginTop: 16 }]}>
                  This Privacy Policy applies only to our online activities and is valid for
                  visitors to our website with regards to the information that they shared and/or
                  collect in Real Remote. This policy is not applicable to any information collected
                  offline or via channels other than this website. Our Privacy Policy was created
                  with the help of the Privacy Policy Generator.
               </Text>
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 90 }]}>Consent</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               By using our website, you hereby consent to our Privacy Policy and agree to its
               terms.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Information we collect</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The personal information that you are asked to provide, and the reasons why you are
               asked to provide it, will be made clear to you at the point we ask you to provide
               your personal information.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               If you contact us directly, we may receive additional information about you such as
               your name, email address, phone number, the contents of the message and/or
               attachments you may send us, and any other information you may choose to provide.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               When you register for an Account, we may ask for your contact information, including
               items such as name, company name, address, email address, and telephone number.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               How we use your information
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               We use the information we collect in various ways, including to:
            </Text>
            <View style={{ marginTop: 16 }}>
               {HowInformation.map((item, index) => {
                  return (
                     <View style={{ alignItems: 'center', flexDirection: 'row' }} key={index}>
                        {index < 5 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}
                        {index > 5 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}

                        <Text style={[Styles.text, { marginLeft: index === 5 ? 20 : 8 }]}>
                           {item}
                        </Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Log Files</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Real Remote follows a standard procedure of using log files. These files log visitors
               when they visit websites. All hosting companies do this and a part of hosting
               services' analytics. The information collected by log files include internet protocol
               (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
               referring/exit pages, and possibly the number of clicks. These are not linked to any
               information that is personally identifiable. The purpose of the information is for
               analyzing trends, administering the site, tracking users' movement on the website,
               and gathering demographic information.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Cookies and Web Beacons
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Like any other website, Real Remote uses 'cookies'. These cookies are used to store
               information including visitors' preferences, and the pages on the website that the
               visitor accessed or visited. The information is used to optimize the users'
               experience by customizing our web page content based on visitors' browser type and/or
               other information.
            </Text>
            <View style={{ flexDirection: 'row' }}>
               <Text style={[Styles.text, { marginTop: 16 }]}>
                  For more general information on cookies, please read
               </Text>
               <Text style={[Styles.text, { marginTop: 16, color: '#0156EC', marginLeft: 6 }]}>
                  "What Are Cookies".
               </Text>
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Our Advertising Partners
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Some of advertisers on our site may use cookies and web beacons. Our advertising
               partners are listed below. Each of our advertising partners has their own Privacy
               Policy for their policies on user data. For easier access, we hyperlinked to their
               Privacy Policies below.
            </Text>
            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 16 }}>
               <Text style={[Styles.dot, { marginHorizontal: 8 }]} />
               <Text style={Styles.text}>Google</Text>
            </View>
            <Text
               style={[Styles.text, { marginTop: 16, color: '#0156EC' }]}
               onPress={() => window.open('https://policies.google.com/technologies/ads')}>
               https://policies.google.com/technologies/ads
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Advertising Partners Privacy Policies
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               You may consult this list to find the Privacy Policy for each of the advertising
               partners of Real Remote.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or
               Web Beacons that are used in their respective advertisements and links that appear on
               Real Remote, which are sent directly to users' browser. They automatically receive
               your IP address when this occurs. These technologies are used to measure the
               effectiveness of their advertising campaigns and/or to personalize the advertising
               content that you see on websites that you visit.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Note that Real Remote has no access to or control over these cookies that are used by
               third-party advertisers.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Third Party Privacy Policies
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Real Remote's Privacy Policy does not apply to other advertisers or websites. Thus,
               we are advising you to consult the respective Privacy Policies of these third-party
               ad servers for more detailed information. It may include their practices and
               instructions about how to opt-out of certain options.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               You can choose to disable cookies through your individual browser options. To know
               more detailed information about cookie management with specific web browsers, it can
               be found at the browsers' respective websites.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Third Party Privacy Policies
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Under the CCPA, among other rights, California consumers have the right to:
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Request that a business that collects a consumer's personal data disclose the
               categories and specific pieces of personal data that a business has collected about
               consumers.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Request that a business delete any personal data about the consumer that a business
               has collected.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Request that a business that sells a consumer's personal data, not sell the
               consumer's personal data.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               If you make a request, we have one month to respond to you. If you would like to
               exercise any of these rights, please contact us.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               GDPR Data Protection Rights
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               We would like to make sure you are fully aware of all of your data protection rights.
               Every user is entitled to the following:
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The right to access – You have the right to request copies of your personal data. We
               may charge you a small fee for this service.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The right to rectification – You have the right to request that we correct any
               information you believe is inaccurate. You also have the right to request that we
               complete the information you believe is incomplete.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The right to erasure – You have the right to request that we erase your personal
               data, under certain conditions.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The right to restrict processing – You have the right to request that we restrict the
               processing of your personal data, under certain conditions.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The right to object to processing – You have the right to object to our processing of
               your personal data, under certain conditions.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The right to data portability – You have the right to request that we transfer the
               data that we have collected to another organization, or directly to you, under
               certain conditions.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               If you make a request, we have one month to respond to you. If you would like to
               exercise any of these rights, please contact us.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Children's Information</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Another part of our priority is adding protection for children while using the
               internet. We encourage parents and guardians to observe, participate in, and/or
               monitor and guide their online activity.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Real Remote does not knowingly collect any Personal Identifiable Information from
               children under the age of 13. If you think that your child provided this kind of
               information on our website, we strongly encourage you to contact us immediately and
               we will do our best efforts to promptly remove such information from our records.
            </Text>
         </View>
         <View style={{ marginTop: 72 }}>
            <BottomShit navigation={navigation} />
         </View>
      </ScrollView>
   );
}

const Styles = StyleSheet.create({
   titleDescription: {
      fontFamily: 'SemiBold',
      fontWeight: '600',
      fontSize: 28,
      color: '#171725',
      letterSpacing: 0.2,
   },
   text: {
      fontFamily: 'Regular',
      fontWeight: '400',
      fontSize: 16,
      letterSpacing: 0.2,
      color: '#171725',
   },
   dot: {
      width: 4,
      height: 4,
      backgroundColor: 'black',
      borderRadius: 4,
   },
});
