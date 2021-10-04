// @ts-check

import React, { useState } from 'react';
import { View } from 'react-native';
import AccordionHeader from './AccordianHeader';
import { Vertical } from '../FlexDirections';
import Divider from '../Divider';
import styles from './styles';

/**
 * Renders Accordian
 * @param {Object} props - pass props to Accordian
 * @param {string} props.title - pass title to Accordian
 * @param {React.ReactNode} props.body - pass content to Accordian
 */
const Accordian = ({ title, body }) => {
  const [hidden, setHidden] = useState(false);

  const toggleDropdown = () => {
    setHidden(!hidden);
  };

  return (
    <Vertical style={[styles.container, hidden && styles.active]}>
      <AccordionHeader
        hidden={hidden}
        title={title}
        toggleDropDown={toggleDropdown}
      />
      {hidden && <View style={styles.content}>{body}</View>}
      <Divider />
    </Vertical>
  );
};

export default Accordian;
