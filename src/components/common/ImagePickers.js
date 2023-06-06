// import { firebase } from '@firebase/app';
// import * as ImagePicker from 'expo-image-picker';
// import React, { useState } from 'react';
// import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function ImagePickers({ name, onUpload }) {
//    const [image, setImage] = useState('');
//    console.log('image', image);

// const onChoose = async () => {
//    const result = await ImagePicker.launchImageLibraryAsync();
//    if (!result.cancelled) {
//       setImage(result.uri);
//       uploadImage(result, name)
//          .then((res) => {
//             res.ref.getDownloadURL().then((url) => {
//                onUpload(url);
//             });
//          })
//          .catch((error) => {
//             alert(error);
//          });
//    }
// };
// const uploadImage = async (uri, imageName) => {
//    const response = await fetch(uri.uri);
//    console.log('response', response);
//    const blob = await response.blob();
//    setLogo(blob);
//    const ref = firebase
//       .storage()
//       .ref()
//       .child('images/' + imageName);
//    return ref.put(blob);
// };

//    return (
//       <View style={{ flexDirection: 'row', marginLeft: 80, marginTop: 20, alignItems: 'center' }}>
//          <TouchableOpacity
//             onPress={name && onChoose}
//             style={[Styles.button, { backgroundColor: name ? 'blue' : 'red' }]}>
//             <Text style={{ color: 'white' }}>CHOSE PIC</Text>
//          </TouchableOpacity>

//          {!!image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
//          {!name && (
//             <Text style={{ color: 'grey', marginLeft: 30 }}>
//                You can choose photo after entering the company name
//             </Text>
//          )}
//       </View>
//    );
// }

// const Styles = StyleSheet.create({
//    button: {
//       paddingVertical: 8,
//       paddingHorizontal: 16,
//       backgroundColor: 'red',
//       borderRadius: 8,
//    },
// });
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';

export default function ImagePickers({ setLogo }) {
   const [image, setImage] = useState(null);

   useEffect(() => {
      (async () => {
         if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
               alert('Sorry, we need camera roll permissions to make this work!');
            }
         }
      })();
   }, []);

   const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      if (!result.cancelled) {
         setImage(result.uri);

         const res = await axios.get(result.uri, { responseType: 'blob' });

         setLogo(res.data);
      }
   };

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button title='Pick an image from camera roll' onPress={pickImage} />
         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
   );
}
