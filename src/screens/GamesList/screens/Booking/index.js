// @ts-check

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import {
  MySafeAreaView,
  Vertical,
  Horizontal,
  MyButton,
  BottomContainer,
  PhoneField,
  H3,
  H4,
  H2,
} from '../../../../components';
import {
  PlusIcon,
  MastercardIcon,
  VisaIcon,
  CheckIcon,
  PenIcon,
  TrashIcon,
} from '../../../../components/SvgIcons';
import styles from './styles';
import payment from '../../../../data/mockPaymentMeethods.json';
import colors from '../../../../constants/colors';
import uuid from 'react-native-uuid';

const Booking = ({ navigation }) => {
  const [phone, setPhone] = useState({
    isVerified: false,
  });
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [edit, setEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (phone.isVerified === true && paymentMethod !== null) {
      setDisabled(false);
    }
  }, [phone, paymentMethod]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => headerRight(),
    });
  }, [edit]);

  const handleGoToPaymentMethod = () => {
    navigation.push('PaymentMethod');
  };

  const handleGoToSuccess = () => {
    navigation.replace('BookingSuccess');
  };

  const headerRight = () => (
    <TouchableOpacity
      onPress={() => {
        setEdit(!edit);
      }}
      style={styles.headerRight}>
      {edit ? (
        <Text style={{ color: '#515BF1' }}>Done</Text>
      ) : (
        <Text> Edit</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <MySafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Vertical style={styles.container}>
          <Horizontal spaceBetween>
            <Vertical>
              <H2>Tee time: 11:15am</H2>
              <H3 color={colors.grey}>TPS Sawgrass GC</H3>
            </Vertical>
            <H2>$120</H2>
          </Horizontal>
          <View style={styles.line} />
          <PhoneField
            label="Phone"
            style={styles.phoneFieldContainer}
            labelStyle={styles.phoneLabel}
            containerStyle={styles.phoneContainer}
            phoneInputStyle={styles.phoneInput}
            flagStyle={styles.flag}
            variant="default"
            onChangeText={text => setPhone(text)}
          />
          <View style={[styles.line, styles.phoneBottomBorder]} />

          <Vertical style={styles.paymentContainer}>
            <H4 style={styles.paymentLabel} color={colors.lightGrey}>
              Payment method
            </H4>
            {payment.map((item, index) => (
              <TouchableOpacity
                key={uuid.v4()}
                onPress={() => {
                  setPaymentMethod(index);
                  index === paymentMethod && setPaymentMethod(null);
                  console.log(item);
                }}>
                <Horizontal
                  style={[
                    styles.paymentMethod,
                    index === paymentMethod && styles.paymentMethodSelected,
                  ]}
                  spaceBetween>
                  <Horizontal>
                    {item.type === 'mastercard' ? (
                      <MastercardIcon
                        style={styles.paymentIcon}
                        width={17}
                        height={11}
                      />
                    ) : (
                      <VisaIcon
                        style={styles.paymentIcon}
                        width={17}
                        height={11}
                      />
                    )}
                    <H3>{item.title}</H3>
                  </Horizontal>
                  {index === paymentMethod && !edit && (
                    <CheckIcon
                      width={16}
                      height={12}
                      color={colors.lightBlue}
                    />
                  )}
                  {edit && (
                    <Horizontal>
                      <TouchableOpacity
                        style={styles.iconMargin}
                        onPress={() => {}}>
                        <PenIcon width={17} height={17} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setModalOpen(true)}>
                        <TrashIcon width={17} height={17} />
                      </TouchableOpacity>
                    </Horizontal>
                  )}
                </Horizontal>
              </TouchableOpacity>
            ))}
            {!edit && (
              <MyButton
                style={styles.addPayment}
                iconLeft={
                  <PlusIcon width={16} height={16} color={colors.lightBlue} />
                }
                iconLeftOffset={3}
                color={colors.lightGrey}
                fullWidth
                type="outline"
                onPress={handleGoToPaymentMethod}>
                <H3 color={colors.lightBlue}>Add new method</H3>
              </MyButton>
            )}
          </Vertical>
        </Vertical>
      </ScrollView>
      <BottomContainer>
        <MyButton
          size="lg"
          disabled={disabled}
          gradientColors={colors.blueGradient}
          onPress={handleGoToSuccess}>
          Book for $120
        </MyButton>
      </BottomContainer>

      <Modal
        visible={modalOpen}
        transparent={true}
        animationType={'fade'}
        style={{ shadowRadius: 10 }}
        onRequestClose={() => setModalOpen(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalContent}>
            <View>
              <H2 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Confirm card removal
              </H2>
              <H4 style={{ textAlign: 'center' }}>
                Are you sure wish to remove the card Mastercard ····4312 This
                action can’t be undone
              </H4>
            </View>
            <Vertical>
              <MyButton
                size="lg"
                type="outline"
                color="#515BF1"
                gradientColors={colors.blueGradient}
                onPress={() => setModalOpen(false)}
                style={styles.modalButtonMargin}>
                Cancel
              </MyButton>
              <MyButton
                size="lg"
                gradientColors={colors.blueGradient}
                onPress={() => {}}>
                Remove
              </MyButton>
            </Vertical>
          </View>
        </View>
      </Modal>
    </MySafeAreaView>
  );
};

export default Booking;
