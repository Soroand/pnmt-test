// @ts-check

import React, { useState, useContext } from 'react';
import { Vertical, Horizontal } from '../../../../components/FlexDirections';
import { H3 } from '../../../../components/Typography';
import MyButton from '../../../../components/MyButton';
import {
  format,
  addDays,
  subDays,
  addMonths,
  subMonths,
  isThisMonth,
  isToday,
} from 'date-fns';
import { weekdays } from './helpers';
import colors from '../../../../constants/colors';
import styles from './styles';
import renderBody from './renderBody';
import RenderSelectedDayBody from './renderSelectedDayBody';
import {
  CalendarIcon,
  TriangleIcon,
  CloseIcon,
} from '../../../../components/SvgIcons';
import { TouchableOpacity } from 'react-native';
import { FilterContext } from '../../../../context/FilterContext';
import uuid from 'react-native-uuid';

const Calendar = ({}) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const { date, setDate } = useContext(FilterContext);

  const handlePreviousMonth = () => {
    setDate(val => subMonths(val, 1));
  };
  const handleNextMonth = () => {
    setDate(val => addMonths(val, 1));
  };

  const renderHeader = () => {
    return (
      <Horizontal style={styles.headerContainer} spaceBetween>
        <TouchableOpacity
          onPress={handlePreviousMonth}
          disabled={isThisMonth(date)}
          style={styles.headerPrev}>
          <TriangleIcon
            style={styles.headerPrevIcon}
            width={7}
            height={14}
            color={isThisMonth(date) ? colors.disabledButton : colors.lightBlue}
          />
        </TouchableOpacity>
        <Horizontal>
          <MyButton
            color={colors.lightBlue}
            type="link"
            iconLeft={
              <CalendarIcon width={11} height={11} color={colors.lightBlue} />
            }
            iconLeftOffset={4}
            textWrapper={H3}
            onPress={() => {}}>
            {format(date, 'MMMM, YYYY')}
          </MyButton>
        </Horizontal>
        <TouchableOpacity onPress={handleNextMonth} style={styles.headerNext}>
          <TriangleIcon width={7} height={14} color={colors.lightBlue} />
        </TouchableOpacity>
      </Horizontal>
    );
  };

  const renderSelectedHeader = () => {
    return (
      <Horizontal style={styles.headerContainer} spaceBetween>
        <TouchableOpacity
          onPress={() => setSelectedDay(subDays(selectedDay, 1))}
          disabled={isToday(selectedDay)}
          style={styles.headerPrev}>
          <TriangleIcon
            style={styles.headerPrevIcon}
            width={7}
            height={14}
            color={
              isToday(selectedDay) ? colors.disabledButton : colors.lightBlue
            }
          />
        </TouchableOpacity>
        <Horizontal>
          <MyButton
            color={colors.lightBlue}
            type="link"
            iconLeft={
              <CalendarIcon width={11} height={11} color={colors.lightBlue} />
            }
            iconLeftOffset={4}
            textWrapper={H3}
            onPress={() => setSelectedDay(null)}>
            {format(selectedDay, 'ddd, MMM, D')}
          </MyButton>
        </Horizontal>
        <TouchableOpacity
          onPress={() => setSelectedDay(addDays(selectedDay, 1))}
          style={styles.headerNext}>
          <TriangleIcon width={7} height={14} color={colors.lightBlue} />
        </TouchableOpacity>
      </Horizontal>
    );
  };

  const renderWeekdayLabels = () => {
    return (
      <Horizontal style={styles.weekLabelContainer} spaceBetween>
        {weekdays.map((label, index) => (
          <Vertical key={uuid.v4()} style={styles.weekLabel} alignCenter>
            <H3 color={colors.grey}>{label}</H3>
          </Vertical>
        ))}
      </Horizontal>
    );
  };

  const renderFooter = () => {
    return (
      <Horizontal style={styles.footer} spaceBetween>
        <Horizontal style={styles.todayDescription}>
          <TriangleIcon
            style={styles.todaySignDescription}
            width={6}
            height={12}
            color={colors.lightBlue}
          />
          <H3>Today</H3>
        </Horizontal>
        <Horizontal>
          <MyButton
            type="link"
            iconLeftOffset={4}
            onPress={() => {}}
            colorOnPressed={colors.transparent}
            iconLeft={<CloseIcon width={8} height={8} color={colors.grey} />}>
            Close
          </MyButton>
        </Horizontal>
      </Horizontal>
    );
  };
  return (
    <Vertical>
      {selectedDay ? renderSelectedHeader() : renderHeader()}
      {!selectedDay && renderWeekdayLabels()}
      {selectedDay ? (
        <RenderSelectedDayBody />
      ) : (
        renderBody({ date, selectDay: setSelectedDay })
      )}
      {!selectedDay && renderFooter()}
    </Vertical>
  );
};

export default Calendar;
