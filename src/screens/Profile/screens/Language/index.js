// @ts-check

import React, { useState, useEffect } from 'react';
import {
  Vertical,
  H3,
  MySafeAreaView,
  Horizontal,
  Divider,
} from '../../../../components';
import { CheckIcon } from '../../../../components/SvgIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../../../constants/colors';
import { useSelector, connect } from 'react-redux';
import { getLanguagesList } from '../../../../store/reference/reference.action';
import { getLanguages } from '../../../../services/reference/reference';
import uuid from 'react-native-uuid';

const Language = ({ getLanguagesList }) => {
  const languages = useSelector(state => state.reference.languages);
  useEffect(() => {
    if (!languages) {
      getLanguages()
        .then(response => {
          getLanguagesList(response.data.data);
        })
        .catch(error => {});
    }
  }, [languages, getLanguagesList]);
  const [languageIndex, setLanguageIndex] = useState(0);

  return (
    <MySafeAreaView>
      <Vertical style={styles.container}>
        {languages?.map((language, index) => (
          <TouchableOpacity
            key={uuid.v4()}
            onPress={() => setLanguageIndex(index)}>
            <Horizontal style={styles.option} spaceBetween>
              <H3>{language.title}</H3>
              {languageIndex === index && (
                <CheckIcon width={16} height={12} color={colors.lightBlue} />
              )}
            </Horizontal>
            <Divider />
          </TouchableOpacity>
        ))}
      </Vertical>
    </MySafeAreaView>
  );
};

export default connect(
  null,
  { getLanguagesList },
)(Language);
