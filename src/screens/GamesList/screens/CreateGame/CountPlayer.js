import React from 'react';
import { View } from 'react-native';
import { BT } from '../../../../components/Typography';
import { Horizontal } from '../../../../components/FlexDirections';
import CreateGameBtn from '../../../../components/MyButton/CreateGameBtn';
import styles from './styles';

const CountPlayer = ({ countPlayer, setCountPlayer }) => {
  const selectedPlayer = 4 - countPlayer;

  return (
    <View style={styles.containerPadding}>
      <BT style={{ marginTop: 25, marginBottom: 10 }} color="#838B97">
        Players
      </BT>
      <Horizontal justifyCenter>
        <CreateGameBtn
          title="2"
          color={selectedPlayer !== 3 ? '#344154' : '#fff'}
          width="33.3%"
          height={44}
          borWidth={1}
          borColor={selectedPlayer !== 3 ? '#D4D4D4' : null}
          fontSize={16}
          bgColor={selectedPlayer !== 3 ? 'transparent' : '#515BF1'}
          borRadiusTL={2}
          borRadiusBL={2}
          press={() => setCountPlayer(1)}
        />
        <CreateGameBtn
          title="3"
          color={selectedPlayer !== 2 ? '#344154' : '#fff'}
          width="33.3%"
          height={44}
          ё
          borWidth={1}
          borColor={selectedPlayer !== 2 ? '#D4D4D4' : '#515BF1'}
          bgColor={selectedPlayer !== 2 ? 'transparent' : '#515BF1'}
          fontSize={16}
          press={() => setCountPlayer(2)}
        />
        <CreateGameBtn
          title="4"
          color={selectedPlayer !== 1 ? '#344154' : '#fff'}
          width="33.3%"
          height={44}
          borWidth={1}
          borColor={selectedPlayer !== 1 ? '#D4D4D4' : '#515BF1'}
          bgColor={selectedPlayer !== 1 ? 'transparent' : '#515BF1'}
          fontSize={16}
          borRadiusTL={2}
          borRadiusBL={2}
          press={() => setCountPlayer(3)}
        />
      </Horizontal>
    </View>
  );
};

export default CountPlayer;
