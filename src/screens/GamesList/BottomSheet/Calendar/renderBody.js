// @ts-check

import React from 'react';
import { format, isBefore, isAfter, subDays, isToday } from 'date-fns';
import { Vertical, Horizontal, H3 } from '../../../../components';
import { getWeeksForMonth } from './helpers';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { TriangleIcon } from '../../../../components/SvgIcons';
import colors from '../../../../constants/colors';
import uuid from 'react-native-uuid';

/**
 * Renders month body
 * @param {Object} props - Props pass to render body
 * @param {Date} props.date - date for render current month
 * @param {any} props.selectDay - date for render current month
 */
const renderBody = ({ date, selectDay }) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const weeks = getWeeksForMonth(month, year);
  const today = subDays(Date(), 1);
  return (
    <Vertical>
      {weeks.map((week, weekIndex) => (
        <Horizontal spaceBetween key={uuid.v4()}>
          {week.map((day, dayIndex) => (
            <Day
              day={day}
              key={uuid.v4()}
              isPastDay={isBefore(day, today)}
              isAnotherMonthDay={
                isBefore(day.getMonth(), date.getMonth()) ||
                isAfter(day.getMonth(), date.getMonth())
              }
              selectDay={selectDay}
            />
          ))}
        </Horizontal>
      ))}
    </Vertical>
  );
};

/**
 * Renders Day component
 * @param {Object} props - Props pass to Day component
 * @param {Date} props.day - day
 * @param {boolean} props.isPastDay - To disable past days
 * @param {boolean} props.isAnotherMonthDay - To disable days of another month
 * @param {any} props.selectDay - To disable days of another month
 */
const Day = ({ day, isPastDay, isAnotherMonthDay, selectDay }) => {
  return (
    <TouchableOpacity
      style={[
        styles.day,
        isPastDay && styles.dayPast,
        isToday(day) && styles.dayToday,
      ]}
      onPress={() => selectDay(day)}
      disabled={isPastDay || isAnotherMonthDay}>
      <Vertical alignCenter>
        {isToday(day) && (
          <TriangleIcon
            style={styles.todaySign}
            width={9}
            height={18}
            color={colors.lightBlue}
          />
        )}
        <H3
          style={[
            styles.dayText,
            (isPastDay || isAnotherMonthDay) && styles.dayTextDisabled,
          ]}>
          {format(day, 'D')}
        </H3>
      </Vertical>
    </TouchableOpacity>
  );
};

export default renderBody;
