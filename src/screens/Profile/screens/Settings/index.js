// @ts-check

import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import {
  MySafeAreaView,
  Vertical,
  BT,
  Horizontal,
  H3,
  Divider,
  MyButton,
  ST,
} from '../../../../components';
import {
  KeyboardArrowRightIcon,
  KeyboardArrowDownIcon,
} from '../../../../components/SvgIcons';
import styles from './styles';
import colors from '../../../../constants/colors';
import { TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { logout } from '../../../../store/auth/auth.action';
import { resetUserInfo } from '../../../../store/user/user.action';
import { resetGameInfo } from '../../../../store/games/games.action';
import { resetClubs } from '../../../../store/clubs/clubs.action';
import { ScrollView } from 'react-native-gesture-handler';

const unitsTable = ['Metres', 'Kilometres'];

const Settings = ({
  navigation,
  logout,
  resetUserInfo,
  resetGameInfo,
  resetClubs,
}) => {
  const [units, setUnits] = useState(0);
  const unitsActionSheet = useRef(null);

  const handleChangeRoute = (route, params) => {
    navigation.push(route, params);
  };

  return (
    <MySafeAreaView>
      <ScrollView>
        <Vertical style={styles.container}>
          <BT style={styles.label} color={colors.lightGrey}>
            Account
          </BT>
          <Vertical style={{ marginBottom: 5 }}>
            <SettingsOption
              name="Personal information"
              onPress={() => handleChangeRoute('EditProfile')}
            />
            {/* <SettingsOption
              name="Mastercard ····3456"
              onPress={() =>
                handleChangeRoute('PaymentMethodForMembersip', {
                  isSettigns: true,
                })
              }
            />
            <SettingsOption
              name="Payment history"
              onPress={() => handleChangeRoute('PaymentHistory')}
            />
            <SettingsOption
              name="Job verify"
              onPress={() => handleChangeRoute('JobVerify')}
            />
            <SettingsOption
              name="Units"
              iconDown
              subtext={unitsTable[units]}
              onPress={() => unitsActionSheet.current.show()}
            />
            <SettingsOption
              name="Language"
              subtext="English"
              onPress={() => handleChangeRoute('Language')}
            />
            <SettingsOption
              name="Membership"
              subtext="Free"
              onPress={() => handleChangeRoute('Membership')}
            /> */}
          </Vertical>
          <BT style={styles.label} color={colors.lightGrey}>
            Support
          </BT>
          <Vertical>
            <SettingsOption
              name="FAQ"
              onPress={() => handleChangeRoute('Faq')}
            />
            <SettingsOption
              name="Support"
              onPress={() => handleChangeRoute('Support')}
            />
            <SettingsOption
              name="Give us feedback"
              onPress={() => handleChangeRoute('Feedback')}
            />
          </Vertical>
          <MyButton
            style={styles.logoutButton}
            type="link"
            color={colors.lightBlue}
            textWrapper={H3}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Intro' }],
              });

              logout();
              resetUserInfo();
              resetGameInfo();
              resetClubs();
            }}>
            Logout
          </MyButton>
          <ActionSheet
            ref={unitsActionSheet}
            title={'Choose your gender'}
            options={[...unitsTable, 'Cancel']}
            cancelButtonIndex={2}
            destructiveButtonIndex={1}
            onPress={index => {
              if (index !== 2) {
                setUnits(index);
              }
            }}
          />
        </Vertical>
      </ScrollView>
    </MySafeAreaView>
  );
};

const SettingsOption = ({ name, subtext = null, onPress, iconDown = null }) => (
  <TouchableOpacity onPress={onPress}>
    <Horizontal style={styles.settingsOptionContainer} spaceBetween alignCenter>
      <H3 color={colors.customBlack}>{name}</H3>
      <Horizontal>
        {subtext && (
          <ST style={styles.subtext} color={colors.grey}>
            {subtext}
          </ST>
        )}
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

export default connect(
  null,
  { logout, resetUserInfo, resetGameInfo, resetClubs },
)(Settings);
