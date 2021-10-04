// @ts-check

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

/**
 * Renders SafeAreaView
 * @component
 * @param {Object} props - Pass props to MySafeAreaView
 * @param {React.ReactNode} props.children - Content of the view
 * @param {Object=} props.style - Additional styles for container
 */
const MySafeAreaView = ({ style, children }) => {
  return (
    <SafeAreaView style={[styles.areaStyle, style]}>{children}</SafeAreaView>
  );
};

export default MySafeAreaView;
