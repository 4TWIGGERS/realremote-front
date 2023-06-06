import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = ({ color = '#0056EC', size = 'large', ...style }) => (
   <ActivityIndicator size={size} color={color} {...style} />
);

export default Spinner;
