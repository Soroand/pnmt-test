import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar';
import Button from './button';
import styles from './styles';
import { H3, BT, ST, CT, Horizontal, Divider } from '..';
import colors from '../../constants/colors';

const Player = ({
  data,
  removePlayer,
  visibleButton,
  disabled,
  navigation,
}) => {
  const fullNameLength = 16;
  const workAndPositionLength = 31;

  const fullName =
    data.fullName.length > fullNameLength
      ? `${data.fullName.substring(0, fullNameLength)}...`
      : data.fullName;

  const bufWorkAndPosition = `${data.workingPosition} in ${data.placeOfWork}`;
  const workAndPosition =
    bufWorkAndPosition.length > workAndPositionLength
      ? `${bufWorkAndPosition.substring(0, workAndPositionLength)}...`
      : bufWorkAndPosition;

  return (
    <TouchableOpacity
      onPress={() => navigation.push('UserProfile', { id: data.id })}>
      <View style={[styles.playerContainer, { opacity: disabled ? 0.5 : 1 }]}>
        <View style={styles.playerAvatar}>
          <Avatar src={data.avatar} />
        </View>
        <View style={styles.playerInfo}>
          <>
            <H3>
              {fullName} · {data.age}
            </H3>
            <ST>{workAndPosition}</ST>

            <Horizontal style={styles.statisticsAndButton}>
              <Horizontal style={styles.gamerPointContainer}>
                <BT color={colors.customBlack}>{data.statistics.hcp}</BT>
                <CT style={styles.gamerPointText} color={colors.customBlack}>
                  HCP
                </CT>
              </Horizontal>
              <Horizontal style={styles.gamerPointContainer}>
                <BT color={colors.customBlack}>{data.statistics.gir}</BT>
                <CT style={styles.gamerPointText} color={colors.customBlack}>
                  GIR
                </CT>
              </Horizontal>
              <Horizontal style={styles.gamerPointContainer}>
                <BT color={colors.customBlack}>{data.statistics.rounds}</BT>
                <CT style={styles.gamerPointText} color={colors.customBlack}>
                  Rounds
                </CT>
              </Horizontal>

              {visibleButton && <Button onClick={removePlayer} />}
            </Horizontal>
          </>
        </View>
      </View>
      <Divider style={styles.divider} />
    </TouchableOpacity>
  );
};

export default Player;
