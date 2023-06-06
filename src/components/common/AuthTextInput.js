import React from 'react';
import { View, TextInput } from 'react-native';

export default function AuthTextInput({
   placeholder,
   value,
   onChangeText,
   onKeyPress,
   style,
   secureTextEntry,
}) {
   return (
      <TextInput
         outline='none'
         onKeyPress={onKeyPress}
         style={style}
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
         secureTextEntry={secureTextEntry}
      />
   );
}
