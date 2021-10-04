// @ts-check

import React, { useState } from 'react';
import {
  Vertical,
  H2,
  BT,
  Divider,
  TextArea,
  BottomContainer,
  MyButton,
  Loader,
} from '../../../../components';
import styles from './styles';
import colors from '../../../../constants/colors';
import { AttachIcon } from '../../../../components/SvgIcons';
import AttachedFiles from './attachedFiles';
import { sendData } from './sendData';
import { filePick } from './filePickLogic';
import uuid from 'react-native-uuid';

const Support = ({ navigation }) => {
  const [problem, setProblem] = useState('');
  const [uploadFiles, setUploadFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  function filterItems(data) {
    setUploadFiles(uploadFiles.filter(item => item.name !== data));
  }

  return loading ? (
    <Vertical alignCenter justifyCenter style={{ height: '90%' }}>
      <Loader />
    </Vertical>
  ) : (
    <Vertical style={{ flex: 1, justifyContent: 'space-between' }}>
      <Vertical style={styles.container}>
        <H2>Send us your request</H2>
        <Divider />
        <BT style={styles.label} color={colors.customBlack}>
          Describe your problem
        </BT>
        <TextArea
          placeholder="Write 2 or 3 lines"
          value={problem}
          onChangeText={text => setProblem(text)}
        />

        {uploadFiles?.length > 0
          ? uploadFiles.map((item, index) => {
              return (
                <AttachedFiles
                  item={item}
                  key={uuid.v4()}
                  filterItems={filterItems}
                />
              );
            })
          : null}
        {uploadFiles?.length > 0 ? null : (
          <MyButton
            style={styles.attach}
            color={colors.lightBlue}
            iconRight={
              <AttachIcon width={9} height={8} color={colors.lightBlue} />
            }
            iconRightOffset={5}
            type="link"
            size="sm"
            onPress={() => filePick({ setUploadFiles, uploadFiles })}>
            Attach files
          </MyButton>
        )}
      </Vertical>
      <BottomContainer>
        <MyButton
          size="lg"
          gradientColors={colors.blueGradient}
          onPress={() => {
            sendData({
              uploadFiles,
              problem,
              navigation,
              setUploadFiles,
              setProblem,
              setLoading,
            });
            setLoading(true);
          }}>
          Send request
        </MyButton>
      </BottomContainer>
    </Vertical>
  );
};

export default Support;
