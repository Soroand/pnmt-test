import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';

/**
 * Renders background image for Auth screens
 * @param {Object} props - Pass props for AuthBackgroundImage
 * @param {React.ReactNode} props.children - Pass props for AuthBackgroundImage
 * @param {Object=} props.style - Pass additional styles to container
 */
export default function AuthBackgroundImage({ children, style }) {
  return (
    <ImageBackground
      // @ts-ignore
      source={require('assets/images/background.png')}
      style={[styles.image, style]}>
      {children}
    </ImageBackground>
  );
}
