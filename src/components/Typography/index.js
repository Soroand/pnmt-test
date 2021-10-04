// @ts-check

import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const TextBase = ({ children, textStyle, style, color, numberOfLines }) => (
  <Text
    numberOfLines={numberOfLines && numberOfLines}
    style={[styles.font, textStyle, style, color && { color: color }]}>
    {children}
  </Text>
);

/**
 * Heading level one
 * @param {Typograohy} props
 */
export const H1 = ({ children, style, color }) => (
  <TextBase style={style} textStyle={styles.h1} color={color}>
    {children}
  </TextBase>
);

/**
 * Heading level two
 * @param {Typograohy} props
 */
export const H2 = ({ children, style, color }) => (
  <TextBase style={style} textStyle={styles.h2} color={color}>
    {children}
  </TextBase>
);

/**
 * Heading level three
 * @param {Typograohy} props
 */
export const H3 = ({ children, style, color, numberOfLines }) => (
  <TextBase
    numberOfLines={numberOfLines && numberOfLines}
    style={style}
    textStyle={styles.h3}
    color={color}>
    {children}
  </TextBase>
);

/**
 * Heading level four
 * @param {Typograohy} props
 */
export const H4 = ({ children, style, color }) => (
  <TextBase style={style} textStyle={styles.h4} color={color}>
    {children}
  </TextBase>
);

/**
 * Body Text
 * @param {Typograohy} props
 */
export const BT = ({ children, style, color }) => (
  <TextBase style={style} textStyle={styles.bt} color={color}>
    {children}
  </TextBase>
);

/**
 * Small Text
 * @param {Typograohy} props
 */
export const ST = ({ children, style, color }) => (
  <TextBase style={style} textStyle={styles.st} color={color}>
    {children}
  </TextBase>
);

/**
 * Caption Text
 * @param {Typograohy} props
 */
export const CT = ({ children, style, color }) => (
  <TextBase style={style} textStyle={styles.ct} color={color}>
    {children}
  </TextBase>
);

/**
 * Typograohy component
 * @typedef {Object} Typograohy
 * @param {Object} props - Pass props to component
 * @param {React.ReactNode} props.children - content of component
 * @param {Object} props.style - custom styles for component
 */
