import React from 'react';
import { StyleSheet } from 'react-native';
import { BT } from '../../../../components/Typography';
import { Horizontal, Vertical } from '../../../../components/FlexDirections';
import CreateGameBtn from '../../../../components/MyButton/CreateGameBtn';
import colors from '../../../../constants/colors';

const GameType = ({ isOpen, setIsOpen }) => {
  return (
    <Vertical style={styles.containerPadding}>
      <BT color={colors.grey}> Type of game</BT>
      <Horizontal justifyCenter style={styles.topBtns}>
        <CreateGameBtn
          title="Open"
          color={isOpen ? colors.mainBackground : colors.customBlack}
          width="50%"
          height={44}
          bgColor={isOpen ? colors.lightBlue : colors.transparent}
          borWidth={1}
          borColor={isOpen ? null : colors.disabledButton}
          fontSize={16}
          borRadiusTL={2}
          borRadiusBL={2}
          press={() => {
            setIsOpen(true);
          }}
        />
        <CreateGameBtn
          title="Closed"
          color={!isOpen ? colors.mainBackground : colors.customBlack}
          width="50%"
          height={44}
          bgColor={!isOpen ? colors.lightBlue : colors.transparent}
          borWidth={1}
          borColor={!isOpen ? null : colors.disabledButton}
          fontSize={16}
          borRadiusTL={2}
          borRadiusBL={2}
          press={() => {
            setIsOpen(false);
          }}
        />
      </Horizontal>
      {isOpen ? (
        <BT>
          Your game will be visible to all users, and you can send a personal
          invitation to your friends
        </BT>
      ) : (
        <BT>Your game will only be visible to players you invited</BT>
      )}
    </Vertical>
  );
};

const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 25,
  },
  topBtns: {
    marginTop: 15,
    marginBottom: 10,
  },
});

export default GameType;
