import React from 'react';
import { Vertical, Horizontal, Divider } from '../../../../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import styles from './styles';
import { KeyboardArrowRightIcon } from '../../../../../components/SvgIcons';
import colors from '../../../../../constants/colors';

const SettingsOption = ({
  isLabel,
  name,
  subtext = null,
  onPress,
  iconDown = null,
  indicators,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Horizontal
        style={styles.settingsOptionContainer}
        spaceBetween
        alignCenter>
        <Vertical>
          <Horizontal>
            <Text
              style={
                isLabel
                  ? styles.settingsOption_label
                  : styles.settingsOption_name
              }>
              {name}
            </Text>
            {indicators != null && (
              <View style={styles.indicators_circle}>
                <Text style={styles.indicators_text}>{indicators}</Text>
              </View>
            )}
          </Horizontal>

          {subtext && (
            <Text style={{ fontSize: 16, lineHeight: 19, color: '#344154' }}>
              {subtext}
            </Text>
          )}
        </Vertical>

        <Horizontal>
          {iconDown ? null : ( // /> //   color={colors.customBlack} //   height={0} //   width={0} // <KeyboardArrowDownIcon
            <KeyboardArrowRightIcon
              width={9}
              height={12}
              color={colors.customBlack}
            />
          )}
        </Horizontal>
      </Horizontal>
      <Divider />
    </TouchableOpacity>
  );
};

export default SettingsOption;
