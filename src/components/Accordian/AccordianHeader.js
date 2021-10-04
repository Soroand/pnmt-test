// @ts-check

import React from 'react';
import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '../SvgIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Horizontal } from '../FlexDirections';
import { H3 } from '../Typography';
import styles from './styles';
import colors from '../../constants/colors';
/**
 * Renders header of the Accordion component
 * @param {Object} props - Props passed to AccordionHeader
 * @param {boolean} props.hidden - State of Accordion
 * @param {Function} props.toggleDropDown - Function to toggle state of Accordion
 * @param {string} props.title - Title of Accordion's header
 */
const AccordionHeader = ({ hidden, toggleDropDown, title }) => {
  return (
    <TouchableOpacity onPress={toggleDropDown}>
      <Horizontal style={styles.header} spaceBetween>
        <H3>{title}</H3>
        {hidden ? (
          <KeyboardArrowUpIcon
            width={8}
            height={5}
            color={colors.customBlack}
          />
        ) : (
          <KeyboardArrowDownIcon
            width={8}
            height={5}
            color={colors.customBlack}
          />
        )}
      </Horizontal>
    </TouchableOpacity>
  );
};

export default AccordionHeader;
