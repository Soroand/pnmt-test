// @ts-check

import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView, Platform } from 'react-native';
import {
  MySafeAreaView,
  TextField,
  Vertical,
  Horizontal,
  BottomContainer,
  MyButton,
} from '../../components';
import styles from './styles';
import { Formik } from 'formik';
import colors from '../../constants/colors';
import { ScanIcon } from '../../components/SvgIcons';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io'
// import { ScrollView } from 'react-native-gesture-handler';

let visa = new RegExp('^4[0-9]{6,}$');
let mastercard = new RegExp(
  '^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$',
);
let amex = new RegExp('^3[47][0-9]{5,}$');
let discover = new RegExp('^6(?:011|5[0-9]{2})[0-9]{3,}$');

const PaymentMethod = ({}) => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload()
    }
  }, [])

  return (
    <Formik
      initialValues={{
        credit: '',
        credentials: '',
        type: '',
        date: '',
        cvc: '',
      }}
      onSubmit={values =>  console.log(values)}
    >
      
        {
          ({ handleChange, handleBlur, handleSubmit, values, dirty, isValid, setFieldValue }) => (
          <MySafeAreaView>
            <ScrollView>
              <Vertical style={styles.container}>
                <Horizontal >
                  <TextField
                    mask="credit-card"
                    style={[styles.input, {width: '100%'}]}
                    label="Credit Card Number"
                    variant="smallPadding"
                    value={values.credit}
                    keyboard="number-pad"
                    onChangeText={text => {
                      text = text.replace(' ', '');

                      if (visa.test(text)) {
                        handleChange({ target: { name: 'type', value: 'Visa' } });
                      } else if (mastercard.test(text)) {
                        handleChange({
                          target: { name: 'type', value: 'MasterCard' },
                        });
                      } else if (amex.test(text)) {
                        handleChange({
                          target: { name: 'type', value: 'Amexp' },
                        });
                      } else if (discover.test(text)) {
                        handleChange({
                          target: { name: 'type', value: 'Discover' },
                        });
                      }

                      handleChange({ target: { name: 'credit', value: text } });
                    }}
                  />
                  <TouchableOpacity 
                    style={{position: 'absolute', right: 0}}
                    onPress={() => {

                      // Использую бесплатную библиотеку для сканирования credit card, по фото она определяет только номер, остальное - руками.
                      // Бесплатной(!) библиотеки для сканирования лучше нет. Тестировал только на андроиде, айфона нет, MacOS нет.
                      // Для ios возможно придется немного править код.
                      CardIOModule.scanCard({requireCardholderName: true, hideCardIOLogo: true, suppressManualEntry: true})
                        .then(card => {
                          const expiryMonth = String(card.expiryMonth).length === 1 ? 0 + String(card.expiryMonth) : String(card.expiryMonth);
                          const expiryYear = String(card.expiryYear).substr(2);
                          const date = expiryMonth + expiryYear;
    
                          setFieldValue('credit', card.cardNumber);
                          setFieldValue('credentials', card.cardholderName);
                          setFieldValue('type', card.cardType);
                          setFieldValue('date', date);
                          setFieldValue('cvc', card.cvv);
                        })
                        .catch((e) => console.error(e))
                    }}
                  >
                    <ScanIcon  width={20} height={20} color={'#555555'}/>
                  </TouchableOpacity>
                </Horizontal>
                
                <TextField
                  style={styles.input}
                  label="Cardholder’s Name"
                  variant="smallPadding"
                  value={values.credentials}
                  keyboard="default"
                  onChangeText={handleChange('credentials')}
                />
                <TextField
                  style={[styles.input, {color: 'black'}]}
                  label="Credit Card Type"
                  variant="smallPadding"
                  editable={false}
                  // inputStyle={{color: '#344154'}}
                  value={values.type}
                  keyboard="default"
                  onChangeText={handleChange('credentials')}
                />
                <Horizontal spaceBetween>
                  <TextField
                    mask="custom"
                    options={{
                      mask: '99/99',
                    }}
                    style={[styles.inlineInputs, styles.dateInput]}
                    label="MM/YY"
                    variant="smallPadding"
                    value={values.date}
                    keyboard="number-pad"
                    onChangeText={handleChange('date')}
                  />

                  <TextField
                    mask="custom"
                    options={{
                      mask: '999',
                    }}
                    style={styles.inlineInputs}
                    label="CVC"
                    variant="smallPadding"
                    value={values.cvc}
                    keyboard="number-pad"
                    onChangeText={handleChange('cvc')}
                  />
                </Horizontal>
              </Vertical>
            </ScrollView>
            <BottomContainer>
              <MyButton
                size="lg"
                disabled={!(isValid && dirty)}
                gradientColors={colors.blueGradient}
                onPress={() => {}}>
                Add
              </MyButton>
            </BottomContainer>
          </MySafeAreaView>
        )}


    </Formik>
  );
};

export default PaymentMethod;
