// @ts-check

import React from 'react';
import { Vertical, Horizontal, H3 } from '../../../../components';

import styles from './styles';
import colors from '../../../../constants/colors';
import { BT } from '../../../../components/Typography';
import { HotIcon } from '../../../../components/SvgIcons';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

/**
 * Renders month body
 * @param {Object} props - Props pass to render body
 */
const RenderSelectedDayBody = ({}) => {
  const [teeTime, setTeeTime] = useState('0');

  return (
    <Horizontal spaceBetween style={styles.cardsList}>
      <TeaTimeCard
        title="Hot deals"
        selected={teeTime === '0'}
        setTeeTime={() => setTeeTime('0')}
        hot
      />
      <TeaTimeCard
        title="Morning"
        selected={teeTime === '1'}
        setTeeTime={() => setTeeTime('1')}
      />
      <TeaTimeCard
        title="Mid-day"
        selected={teeTime === '2'}
        setTeeTime={() => setTeeTime('2')}
      />
      <TeaTimeCard
        title="Afternoon"
        selected={teeTime === '3'}
        setTeeTime={() => setTeeTime('3')}
      />
    </Horizontal>
  );
};

const TeaTimeCard = ({ title, hot = false, selected, setTeeTime }) => {
  const renderHeader = () => {
    return (
      <Horizontal justifyCenter style={styles.cardHeader}>
        {hot && <HotIcon style={styles.hotIcon} width={10} height={12} />}
        <BT color={hot ? colors.lightBlue : colors.customBlack}>{title}</BT>
      </Horizontal>
    );
  };
  const renderBody = () => {
    return (
      <Vertical alignCenter style={styles.cardBody}>
        <H3 style={styles.cardTime}>10:30-13:50</H3>
        <BT>2 Tee Times,</BT>
        <BT>from $55.00</BT>
      </Vertical>
    );
  };

  return (
    <Vertical style={[styles.card, selected && styles.cardSelected]}>
      <TouchableOpacity onPress={setTeeTime}>
        {renderHeader()}
        {renderBody()}
      </TouchableOpacity>
    </Vertical>
  );
};

export default RenderSelectedDayBody;
