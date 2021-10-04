// @ts-check

import React from 'react';
import { Image, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { PersonIcon, PlusIcon } from '../SvgIcons';
import { scale } from 'react-native-size-matters';
import colors from '../../constants/colors';

/**
 * Renders avatar component
 * @param {Object} props - Pass props to component
 * @param {string | null} props.src - Source of image
 * @param {number=} props.width - Width of image
 * @param {number=} props.height - Height of image
 * @param {Object=} props.style - Custom styles for component
 * @param {boolean=} props.invite - Custom styles for component
 */

const Avatar = ({ src, width, height, style, invite }) => {
  return (
    <View
      style={[
        style,
        styles.default,
        width && { width: scale(width) },
        height && { height: scale(height) },
        !src && !invite && styles.border,
      ]}>
      {src ? (
        <Image style={styles.image} source={{ uri: src }} />
      ) : invite ? (
        <>
          <View style={styles.plusContainer} />
          <PlusIcon
            style={styles.plusIcon}
            width={width ? width / 2 - 3 : '100%'}
            height={height ? height / 2 : '100%'}
            filled
          />
        </>
      ) : (
        <PersonIcon
          width={width ? width / 2 - 3 : '40%'}
          height={height ? height / 2 : '50%'}
          color={colors.lightGrey}
          filled
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  image: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  border: {
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 100,
  },
  plusContainer: {
    position: 'relative',
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    width: '100%',
    height: '100%',
  },
  plusIcon: {
    position: 'absolute',
  },
});

export default Avatar;
