import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import ImagePickers from '../components/common/ImagePickers';
import { userAuth } from '../stores/index';
// import { saveNewPost, editPost, getById } from '../../firebase/firestore';

export const Busfaabra = ({ route, navigation }) => {
   const [jobTitle, setJobTitle] = useState('');
   const [description, setDescription] = useState('');
   const [link, setLink] = useState('');
   const [qualifications, setQualifications] = useState([]);
   const [whatWeOffer, setWhatWeOffer] = useState([]);
   const [tags, setTags] = useState([]);
   const [workLevel, setWorkLevel] = useState('');
   const [employmentType, setEmploymentType] = useState('');
   const [experience, setExperience] = useState('');
   const [offerSalary, setOfferSalary] = useState('');
   const [name, setName] = useState('');
   const [country, setCountry] = useState('');
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');
   const [logo, setLogo] = useState('');
   const [category, setCategory] = useState('softwareDevelopment');
   const [city, setCity] = useState('');
   const [hotOrVerified, setHotOrVerified] = useState('');
   const [responsibilities, setResponsibilities] = useState([]);
   const [date, setDate] = useState(Date.now());
   const [logoCheck, setLogoCheck] = useState('');

   const { signOut, isLoggedIn } = userAuth();

   const edit = route.params?.edit;
   const jobId = route.params?.jobId;

   useEffect(() => {
      if (!isLoggedIn) {
         navigation.navigate('SignInScreen');
      }
   }, [isLoggedIn]);

   const saveNewPost = () => {
      const fd = new FormData();
      fd.append('logo', logo);
      fd.append('jobTitle', jobTitle);
      fd.append('description', description);
      fd.append('link', link);
      fd.append('responsibilities', JSON.stringify(responsibilities));
      fd.append('qualifications', JSON.stringify(qualifications));
      fd.append('whatWeOffer', JSON.stringify(whatWeOffer));
      fd.append('tags', JSON.stringify(tags));
      fd.append('name', name);
      fd.append('country', country);
      fd.append('employmentType', employmentType);
      fd.append('workLevel', workLevel);
      fd.append('category', category);
      fd.append('experience', experience);
      fd.append('offerSalary', offerSalary);
      fd.append('startDate', startDate);
      fd.append('endDate', endDate);
      fd.append('date', date);
      fd.append('city', city);
      fd.append('hotOrVerified', hotOrVerified);

      axios
         .post('https://realremote.io/create/job', fd, {
            headers: {
               'content-type': 'multipart/form-data',
            },
         })
         .then((res) => {
            // alert('res');
            // console.log('res', res);
            if (res) {
               navigation.navigate('Home');
            }
         })
         .catch((e) => {
            if (e) {
               alert('not save');
            }
         });
   };
   const editPost = () => {
      const fd = new FormData();
      if (logoCheck !== logo) {
         fd.append('logo', logo);
      }
      fd.append('jobTitle', jobTitle);
      fd.append('description', description);
      fd.append('link', link);
      fd.append('responsibilities', JSON.stringify(responsibilities));
      fd.append('qualifications', JSON.stringify(qualifications));
      fd.append('whatWeOffer', JSON.stringify(whatWeOffer));
      fd.append('tags', JSON.stringify(tags));
      fd.append('name', name);
      fd.append('country', country);
      fd.append('employmentType', employmentType);
      fd.append('workLevel', workLevel);
      fd.append('category', category);
      fd.append('experience', experience);
      fd.append('offerSalary', offerSalary);
      fd.append('startDate', startDate);
      fd.append('endDate', endDate);
      fd.append('date', date);
      fd.append('city', city);
      fd.append('hotOrVerified', hotOrVerified);
      axios
         .post(`https://realremote.io/edit/job?id=${jobId}`, fd, {
            headers: {
               'content-type': 'multipart/form-data',
            },
         })
         .then((res) => {
            if (res) {
               navigation.goBack();
            }
         })
         .catch((e) => {
            if (e) {
               alert('not edit');
            }
         });
   };

   useEffect(() => {
      if (jobId) {
         axios
            .get(`https://realremote.io/find/one/job/?jobId=${jobId}`)
            .then((res) => {
               setJobTitle(res.data.jobTitle);
               setCity(res.data.city);
               setTags(res.data.tags);
               setWhatWeOffer(res.data.whatWeOffer);
               setQualifications(res.data.qualifications);
               setDescription(res.data.description);
               setLink(res.data.link);
               setWorkLevel(res.data.workLevel);
               setEmploymentType(res.data.employmentType);
               setExperience(res.data.experience);
               setOfferSalary(res.data.offerSalary);
               setName(res.data.name);
               setCountry(res.data.country);
               setStartDate(res.data.startDate);
               setEndDate(res.data.endDate);
               setLogo(res.data.logo);
               setCategory(res.data.category);
               setHotOrVerified(res.data.hotOrVerified);
               setResponsibilities(res.data.responsibilities);
               setDate(res.data.date);
               setLogoCheck(res.data.logo);
            })
            .catch((e) => console.log(e));
      }
   }, [jobId]);

   return (
      <ScrollView style={Styles.root}>
         <TouchableOpacity
            onPress={() => {
               signOut();
               navigation.navigate('SignUpScreen');
            }}>
            <Text>LogOut</Text>
         </TouchableOpacity>
         <ImagePickers setLogo={setLogo} />

         <Picker
            selectedValue={employmentType}
            style={[Styles.picker, { marginVertical: 20 }]}
            onValueChange={(itemValue) => setEmploymentType(itemValue)}>
            <Picker.Item label='Choose Part-Time or Full-Time ' />
            <Picker.Item label='Part-Time' value='partTime' />
            <Picker.Item label='Full-Time' value='fullTime' />
         </Picker>
         <Picker
            selectedValue={category}
            style={Styles.picker}
            onValueChange={(itemValue) => setCategory(itemValue)}>
            <Picker.Item label='Software Development' value='softwareDevelopment' />
            <Picker.Item label='Design' value='design' />
            <Picker.Item label='Management' value='management' />
            <Picker.Item label='Information Technology' value='informationTechnology' />
         </Picker>
         <Picker
            selectedValue={hotOrVerified}
            style={[Styles.picker, { marginTop: 20 }]}
            onValueChange={(itemValue) => setHotOrVerified(itemValue)}>
            <Picker.Item label='importance' />
            <Picker.Item label='Hot' value='hot' />
            <Picker.Item label='Verified' value='verified' />
            <Picker.Item label='Exclusive' value='Exclusive' />
         </Picker>
         <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TextInput
               style={Styles.textInput}
               placeholder='job title'
               value={jobTitle}
               onChangeText={(text) => setJobTitle(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='company name'
               value={name}
               onChangeText={(text) => setName(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='company country'
               value={country}
               onChangeText={(text) => setCountry(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='city'
               value={city}
               onChangeText={(text) => setCity(text)}
            />

            <TextInput
               style={Styles.textInput}
               multiline
               numberOfLines={4}
               placeholder='job description'
               value={description}
               onChangeText={(text) => setDescription(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='Link'
               value={link}
               onChangeText={(text) => setLink(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='workLevel'
               value={workLevel}
               onChangeText={(text) => setWorkLevel(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='experience'
               value={experience}
               onChangeText={(text) => setExperience(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='offerSalary'
               value={offerSalary}
               onChangeText={(text) => setOfferSalary(text)}
            />
            <TextInput
               style={Styles.textInput}
               placeholder='logo'
               value={logo}
               onChangeText={(text) => setLogo(text)}
            />

            <TextInputMask
               style={Styles.textInput}
               placeholder='MM/DD/YYYY  start'
               type='datetime'
               options={{
                  format: 'MM/DD/YYYY',
               }}
               value={startDate}
               onChangeText={(text) => {
                  setStartDate(text);
               }}
            />
            <TextInputMask
               style={Styles.textInput}
               placeholder='MM/DD/YYYY  end'
               type='datetime'
               options={{
                  format: 'MM/DD/YYYY',
               }}
               value={endDate}
               onChangeText={(text) => {
                  setEndDate(text);
               }}
            />

            {/* <TextInput
               style={Styles.textInput}
               placeholder='key separated by comma'
               value={key}
               onChangeText={setKey}
            /> */}

            {qualifications?.map((value, index) => {
               return (
                  <View
                     style={{
                        flexDirection: 'row',
                     }}
                     key={index.toString()}>
                     <TextInput
                        style={[Styles.textInput, { width: 700 }]}
                        placeholder={'qualification #' + (index + 1)}
                        value={value}
                        onChangeText={(text) => {
                           const _qual = [...qualifications];
                           if (text !== '') {
                              _qual[index] = text;
                              setQualifications(_qual);
                           }
                        }}
                     />
                     <TouchableOpacity
                        style={Styles.del}
                        onPress={() => {
                           const _qual = [...qualifications];
                           if (_qual.length) {
                              _qual.splice(index, 1);
                              setQualifications(_qual);
                           }
                        }}>
                        <Text style={Styles.text}>remove qualification</Text>
                     </TouchableOpacity>
                  </View>
               );
            })}
            <TouchableOpacity
               style={Styles.qual}
               onPress={() => {
                  const _qual = [...qualifications];
                  if (_qual[_qual.length - 1] || !_qual.length) {
                     _qual.push('');
                     setQualifications(_qual);
                  }
               }}>
               <Text style={Styles.text}>Add qualifications</Text>
            </TouchableOpacity>

            {responsibilities?.map((value, index) => {
               return (
                  <View
                     style={{
                        flexDirection: 'row',
                     }}
                     key={index.toString()}>
                     <TextInput
                        style={[Styles.textInput, { width: 700 }]}
                        placeholder={'responsibilities #' + (index + 1)}
                        value={value}
                        onChangeText={(text) => {
                           const _qual = [...responsibilities];
                           if (text !== '') {
                              _qual[index] = text;
                              setResponsibilities(_qual);
                           }
                        }}
                     />
                     <TouchableOpacity
                        style={Styles.del}
                        onPress={() => {
                           const _qual = [...responsibilities];
                           if (_qual.length) {
                              _qual.splice(index, 1);
                              setResponsibilities(_qual);
                           }
                        }}>
                        <Text style={Styles.text}>remove responsibilities</Text>
                     </TouchableOpacity>
                  </View>
               );
            })}

            <TouchableOpacity
               style={Styles.qual}
               onPress={() => {
                  const _qual = [...responsibilities];
                  if (_qual[_qual.length - 1] || !_qual.length) {
                     _qual.push('');
                     setResponsibilities(_qual);
                  }
               }}>
               <Text style={Styles.text}>Add responsibilities</Text>
            </TouchableOpacity>

            {whatWeOffer?.map((value, index) => {
               return (
                  <View
                     style={{
                        flexDirection: 'row',
                     }}
                     key={index.toString()}>
                     <TextInput
                        style={[Styles.textInput, { width: 700 }]}
                        placeholder={'whatWeOffer #' + (index + 1)}
                        value={value}
                        onChangeText={(text) => {
                           const _qual = [...whatWeOffer];
                           _qual[index] = text;
                           setWhatWeOffer(_qual);
                        }}
                     />
                     <TouchableOpacity
                        style={Styles.del}
                        onPress={() => {
                           const _qual = [...whatWeOffer];
                           if (_qual.length) {
                              _qual.splice(index, 1);
                              setWhatWeOffer(_qual);
                           }
                        }}>
                        <Text style={Styles.text}>remove whatWeOffer</Text>
                     </TouchableOpacity>
                  </View>
               );
            })}

            <TouchableOpacity
               style={Styles.qual}
               onPress={() => {
                  const _qual = [...whatWeOffer];
                  if (_qual[_qual.length - 1] || !_qual.length) {
                     _qual.push('');
                     setWhatWeOffer(_qual);
                  }
               }}>
               <Text style={Styles.text}>Add whatWeOffer</Text>
            </TouchableOpacity>

            {tags?.map((value, index) => {
               return (
                  <View
                     style={{
                        flexDirection: 'row',
                     }}
                     key={index.toString()}>
                     <TextInput
                        style={[Styles.textInput, { width: 700 }]}
                        placeholder={'tags #' + (index + 1)}
                        value={value}
                        onChangeText={(text) => {
                           const _qual = [...tags];
                           _qual[index] = text;
                           setTags(_qual);
                        }}
                     />
                     <TouchableOpacity
                        style={Styles.del}
                        onPress={() => {
                           const _qual = [...tags];
                           if (_qual.length) {
                              _qual.splice(index, 1);
                           }
                           setTags(_qual);
                        }}>
                        <Text style={Styles.text}>remove tags</Text>
                     </TouchableOpacity>
                  </View>
               );
            })}

            <TouchableOpacity
               style={Styles.qual}
               onPress={() => {
                  const _qual = [...tags];
                  if (_qual[_qual.length - 1] || !_qual.length) {
                     _qual.push('');
                     setTags(_qual);
                  }
               }}>
               <Text style={Styles.text}>Add tags</Text>
            </TouchableOpacity>
            {edit ? (
               <TouchableOpacity
                  style={Styles.savePost}
                  onPress={() => {
                     // let keywordArray = [];

                     // if (key.length) {
                     //    keywordArray = key.split(',');
                     //    keywordArray.forEach((keyword, i) => {
                     //       keywordArray[i] = keyword.trim();
                     //    });
                     // }
                     // if (!keywordArray.includes(name.toLowerCase()) && name)
                     //    keywordArray.push(name.toLowerCase());
                     // if (!keywordArray.includes(jobTitle.toLowerCase()) && jobTitle) {
                     //    keywordArray.push(jobTitle.toLowerCase());
                     //    const jobTitleArray = jobTitle.toLowerCase().split(' ');
                     //    if (jobTitleArray.length) {
                     //       jobTitleArray.forEach((word) => {
                     //          keywordArray.push(word);
                     //       });
                     //    }
                     // }
                     // if (!keywordArray.includes(employeeType.toLowerCase()) && employeeType)
                     //    keywordArray.push(employeeType.toLowerCase());

                     // tags.forEach((item) => {
                     //    if (!keywordArray.includes(item.toLowerCase()) && item)
                     //       keywordArray.push(item.toLowerCase());
                     // });
                     editPost();
                  }}>
                  <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                     edit
                  </Text>
               </TouchableOpacity>
            ) : (
               <TouchableOpacity
                  onPress={() => {
                     // let keywordArray = [];

                     // if (key.length) {
                     //    keywordArray = key.split(',');
                     //    keywordArray.forEach((keyword, i) => {
                     //       keywordArray[i] = keyword.trim();
                     //    });
                     // }
                     // if (!keywordArray.includes(name.toLowerCase()) && name)
                     //    keywordArray.push(name.toLowerCase());
                     // if (!keywordArray.includes(jobTitle.toLowerCase()) && jobTitle)
                     //    keywordArray.push(jobTitle.toLowerCase());
                     // if (!keywordArray.includes(employeeType.toLowerCase()) && employeeType)
                     //    keywordArray.push(employeeType.toLowerCase());

                     // tags.forEach((item) => {
                     //    if (!keywordArray.includes(item.toLowerCase()) && item)
                     //       keywordArray.push(item.toLowerCase());
                     // });

                     saveNewPost();
                  }}
                  style={Styles.savePost}>
                  <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                     save new post
                  </Text>
               </TouchableOpacity>
            )}
         </View>
      </ScrollView>
   );
};
const Styles = StyleSheet.create({
   root: {
      flex: 1,
   },
   savePost: {
      backgroundColor: 'blue',
      paddingVertical: 20,
      width: 300,
      marginHorizontal: 100,
      borderRadius: 50,
      marginTop: 40,
      marginBottom: 20,
   },
   textInput: {
      marginVertical: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      fontSize: 30,
      width: '90%',
   },
   textInputMobile: {
      width: '90%',
      borderBottomWidth: 1,
      borderBottomColor: 'red',
   },
   qual: {
      backgroundColor: 'black',
      marginTop: 20,
      paddingHorizontal: 100,
      paddingVertical: 20,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   del: {
      backgroundColor: 'red',

      width: 150,
      paddingVertical: 20,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      color: 'white',
      fontWeight: 'bold',
   },
   picker: {
      height: 50,
      width: 300,
      borderRadius: 8,
      borderColor: 'black',
      marginLeft: 70,
   },
});
