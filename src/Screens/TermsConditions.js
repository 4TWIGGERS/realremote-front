import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import BottomShit from '../component/BottomShit';
import Header from '../component/Header';
import { useResponsive } from '../stores/index';

const License = [
   'Republish material from Real Remote',
   'Sell, rent or sub-license material from Real Remote',
   'Reproduce, duplicate or copy material from Real Remote',
   'Redistribute content from Real Remote',
   'This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator.',
];

const License2 = [
   'You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;',
   'The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;',
   'The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy',
   'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.',
   'You hereby grant 4twiggers a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any',
   ' and all forms, formats or media.',
];

const Hyperlinking = [
   'Government agencies;',
   'Search engines;',
   'News organizations;',
   'Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and',
   'System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not',
   'hyperlink to our Web site.',
   'These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b)',
   'does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking',
   'party’s site.',
];
const Hyperlinking3 = [
   'By use of our corporate name; or',
   'By use of the uniform resource locator being linked to; or',
   'By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.',
   'No use of 4twiggers logo or other artwork will be allowed for linking absent a trademark license agreement.',
];
const Hyperlinking2 = [
   'We may consider and approve other link requests from the following types of organizations:',
   'commonly-known consumer and/or business information sources;',
   'dot.com community sites;',
   'associations or other groups representing charities;',
   'online directory distributors;',
   'internet portals;',
   'accounting, law and consulting firms; and',
   'educational institutions and trade associations.',
   'We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited',
   'businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the',
   'absence of 4twiggers; and (d) the link is in the context of general resource information.',
];
const Disclaimer = [
   'limit or exclude our or your liability for death or personal injury;',
   'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
   'limit any of our or your liabilities in any way that is not permitted under applicable law; or',
   'exclude any of our or your liabilities that may not be excluded under applicable law.',
   'The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern',
   'all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.',
];

export default function TermsConditions({ navigation }) {
   const scrollAnimatedValue = useSharedValue(0);
   const { isDesktop } = useResponsive();

   return (
      <ScrollView showsVerticalScrollIndicator='false' style={{ backgroundColor: 'white' }}>
         <Header {...{ scrollAnimatedValue }} />
         <View style={{ position: 'absolute', right: 72, top: 196, zIndex: 1000 }}>
            <Image source={require('../../assets/Terms.png')} style={{ height: 492, width: 747 }} />
         </View>
         <View style={{ marginHorizontal: 72, marginTop: 149, backgroundColor: 'white' }}>
            <Text style={[Styles.titleDescription, { fontSize: 37, color: '#0156EC' }]}>
               Terms and Conditions
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 24 }]}>
               Welcome to Real Remote!
            </Text>
            <View style={{ width: 492, marginTop: 32 }}>
               <Text style={Styles.text}>
                  These terms and conditions outline the rules and regulations for the use of
                  4twiggers's Website, located at Realremote.io.
               </Text>
               <Text style={[Styles.text, { marginTop: 16 }]}>
                  By accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Real Remote if you do not agree to take all of the terms and
                  conditions stated on this page.
               </Text>
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 145 }]}>Terminology</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The following terminology applies to these Terms and Conditions, Privacy Statement
               and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you,
               the person log on this website and compliant to the Company’s terms and conditions.
               "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
               "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the
               offer, acceptance and consideration of payment necessary to undertake the process of
               our assistance to the Client in the most appropriate manner for the express purpose
               of meeting the Client’s needs in respect of provision of the Company’s stated
               services, in accordance with and subject to, prevailing law of Netherlands. Any use
               of the above terminology or other words in the singular, plural, capitalization
               and/or he/she or they, are taken as interchangeable and therefore as referring to
               same.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Cookies</Text>
            <Text style={[Styles.text, { marginVertical: 16 }]}>
               We employ the use of cookies. By accessing Real Remote, you agreed to use cookies in
               agreement with the 4twiggers's Privacy Policy.
            </Text>
            <Text style={[Styles.text]}>
               Most interactive websites use cookies to let us retrieve the user’s details for each
               visit. Cookies are used by our website to enable the functionality of certain areas
               to make it easier for people visiting our website. Some of our affiliate/advertising
               partners may also use cookies.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>License</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Unless otherwise stated, 4twiggers and/or its licensors own the intellectual property
               rights for all material on Real Remote. All intellectual property rights are
               reserved. You may access this from Real Remote for your own personal use subjected to
               restrictions set in these terms and conditions.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>You must not:</Text>
            <View style={{ marginTop: 16 }}>
               {License.map((item, index) => {
                  return (
                     <View style={{ alignItems: 'center', flexDirection: 'row' }} key={index}>
                        <Text style={[Styles.dot, { marginHorizontal: 8 }]} />
                        <Text style={Styles.text}>{item}</Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Parts of this website offer an opportunity for users to post and exchange opinions
               and information in certain areas of the website. 4twiggers does not filter, edit,
               publish or review Comments prior to their presence on the website. Comments do not
               reflect the views and opinions of 4twiggers,its agents and/or affiliates. Comments
               reflect the views and opinions of the person who post their views and opinions. To
               the extent permitted by applicable laws, 4twiggers shall not be liable for the
               Comments or for any liability, damages or expenses caused and/or suffered as a result
               of any use of and/or posting of and/or appearance of the Comments on this website.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               4twiggers reserves the right to monitor all Comments and to remove any Comments which
               can be considered inappropriate, offensive or causes breach of these Terms and
               Conditions.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>You warrant and represent that:</Text>
            <View style={{ marginTop: 16 }}>
               {License2.map((item, index) => {
                  return (
                     <View style={{ alignItems: 'center', flexDirection: 'row' }} key={index}>
                        {index < 5 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}
                        <Text style={[Styles.text, { marginLeft: index < 5 ? 8 : 16 }]}>
                           {item}
                        </Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Hyperlinking to our Content
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               The following organizations may link to our Website without prior written approval:
            </Text>
            <View style={{ marginTop: 16 }}>
               {Hyperlinking.map((item, index) => {
                  return (
                     <View
                        style={{
                           alignItems: 'center',
                           flexDirection: 'row',
                        }}
                        key={index}>
                        {index < 5 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}
                        {index === 6 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}

                        <Text
                           style={[Styles.text, { marginLeft: index < 5 || index === 6 ? 8 : 20 }]}>
                           {item}
                        </Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               We may consider and approve other link requests from the following types of
               organizations:
            </Text>
            <View style={{ marginTop: 16 }}>
               {Hyperlinking2.map((item, index) => {
                  return (
                     <View style={{ alignItems: 'center', flexDirection: 'row' }} key={index}>
                        {index < 9 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}
                        <Text style={[Styles.text, { marginLeft: index < 9 ? 8 : 20 }]}>
                           {item}
                        </Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               These organizations may link to our home page so long as the link: (a) is not in any
               way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the
               linking party and its products or services; and (c) fits within the context of the
               linking party’s site.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               If you are one of the organizations listed in paragraph 2 above and are interested in
               linking to our website, you must inform us by sending an e-mail to 4twiggers. Please
               include your name, your organization name, contact information as well as the URL of
               your site, a list of any URLs from which you intend to link to our Website, and a
               list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a
               response.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Approved organizations may hyperlink to our Website as follows:
            </Text>
            <View style={{ marginTop: 16 }}>
               {Hyperlinking3.map((item, index) => {
                  return (
                     <View style={{ alignItems: 'center', flexDirection: 'row' }} key={index}>
                        <Text style={[Styles.dot, { marginLeft: 8 }]} />
                        <Text style={[Styles.text, { marginLeft: 8 }]}>{item}</Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>iFrames</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               Without prior approval and written permission, you may not create frames around our
               Webpages that alter in any way the visual presentation or appearance of our Website.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Your Privacy</Text>
            <View style={{ flexDirection: 'row' }}>
               <Text style={[Styles.text, { marginTop: 16 }]}>Please read</Text>
               <Text
                  style={[
                     Styles.text,
                     { marginTop: 16, color: '#0156EC', marginLeft: 4, fontWeight: 'bold' },
                  ]}
                  onPress={() => navigation.navigate('privacyPolicy')}>
                  Privacy Policy
               </Text>
            </View>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Reservation of Rights</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               We reserve the right to request that you remove all links or any particular link to
               our Website. You approve to immediately remove all links to our Website upon request.
               We also reserve the right to amen these terms and conditions and it’s linking policy
               at any time. By continuously linking to our Website, you agree to be bound to and
               follow these linking terms and conditions.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>
               Removal of links from our website
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               If you find any link on our Website that is offensive for any reason, you are free to
               contact and inform us any moment. We will consider requests to remove links but we
               are not obligated to or so or to respond to you directly.
            </Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               We do not ensure that the information on this website is correct, we do not warrant
               its completeness or accuracy; nor do we promise to ensure that the website remains
               available or that the material on the website is kept up to date.
            </Text>
            <Text style={[Styles.titleDescription, { marginTop: 40 }]}>Disclaimer</Text>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               To the maximum extent permitted by applicable law, we exclude all representations,
               warranties and conditions relating to our website and the use of this website.
               Nothing in this disclaimer will:
            </Text>
            <View style={{ marginTop: 16 }}>
               {Disclaimer.map((item, index) => {
                  return (
                     <View style={{ alignItems: 'center', flexDirection: 'row' }} key={index}>
                        {index < 5 && <Text style={[Styles.dot, { marginLeft: 8 }]} />}
                        <Text style={[Styles.text, { marginLeft: index < 5 ? 8 : 20 }]}>
                           {item}
                        </Text>
                     </View>
                  );
               })}
            </View>
            <Text style={[Styles.text, { marginTop: 16 }]}>
               As long as the website and the information and services on the website are provided
               free of charge, we will not be liable for any loss or damage of any nature.
            </Text>
         </View>
         <View style={{ marginTop: 64 }}>
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
