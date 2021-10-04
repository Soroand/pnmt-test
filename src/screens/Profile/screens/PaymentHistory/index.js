// @ts-check

import React from 'react';
import {
  MySafeAreaView,
  Vertical,
  BT,
  Horizontal,
  Divider,
  H2,
} from '../../../../components';
import { MastercardIcon, VisaIcon } from '../../../../components/SvgIcons';
import styles from './styles';
import colors from '../../../../constants/colors';
import uuid from 'react-native-uuid';
import payment from '../../../../data/mockPaymentHistory.json';

const PaymentHistory = ({}) => {
  return (
    <MySafeAreaView>
      <Vertical style={styles.container}>
        {payment.map((item, index) => (
          <Payment
            key={uuid.v4()}
            name={item.name}
            type={item.type}
            number={item.number}
            price={item.price}
            date={item.date}
          />
        ))}
      </Vertical>
    </MySafeAreaView>
  );
};

const Payment = ({ name, type, number, price, date }) => (
  <>
    <Vertical style={styles.paymentContainer} spaceBetween>
      <Horizontal style={styles.paymentHeader} spaceBetween>
        <H2 color={colors.customBlack}>{name}</H2>
        <H2 color={colors.customBlack}>{price}</H2>
      </Horizontal>
      <Horizontal spaceBetween>
        <Horizontal>
          {type === 'Mastercard' ? (
            <MastercardIcon width={17} height={11} />
          ) : (
            <VisaIcon width={17} height={11} />
          )}
          <BT>{type}</BT>
          <BT>{number}</BT>
        </Horizontal>
        <BT>{date}</BT>
      </Horizontal>
    </Vertical>
    <Divider />
  </>
);

export default PaymentHistory;
