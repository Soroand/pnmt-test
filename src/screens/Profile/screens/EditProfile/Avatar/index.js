import React, { useState, useRef } from 'react';
import styles from '../styles';
import { Platform } from 'react-native';
import { Vertical, H2, H3, Avatar } from '../../../../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../../../constants/colors';
import { PhotoIcon } from '../../../../../components/SvgIcons';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import { updateAvatar } from 'services/user/user';
import { convertToFormData } from 'services/helper';
import { useSelector } from 'react-redux';
import { getMyProfileComplete } from 'store/user/user.action';
import { useDispatch } from 'react-redux';

const ChangeAvatar = ({
  profileAvatar,
  fullName,
  workingPosition,
  placeOfWork,
  setNewAvatar,
  newAvatar,
}) => {
  const [initialAvatar, setInitialAvatar] = useState(profileAvatar);
  const myProfile = useSelector(state => state.user.myProfile);
  const avatarChangeActionSheet = useRef(null);
  const dispatch = useDispatch();
  const pickImage = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 768,
      compressImageMaxHeight: 1024,
      cropperCircleOverlay: true,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      setNewAvatar(image);
      updateAvatar(
        convertToFormData({
          avatar: {
            name: image.filename || `${new Date().getTime()}.jpg`,
            type: image.mime,
            uri:
              Platform.OS === 'android'
                ? image.path
                : image.path.replace('file://', ''),
          },
        }),
      )
        .then(response => {
          console.log(response.data.data);
          dispatch(getMyProfileComplete(response.data.data));
          alert('Successfully changed!');
        })
        .catch(error => {
          console.log(error);
          alert('Something went wrong!');
        });
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 768,
      compressImageMaxHeight: 1024,
      cropperCircleOverlay: true,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      setNewAvatar(image);
      updateAvatar(
        convertToFormData({
          avatar: {
            name: image.filename || `${new Date().getTime()}.jpg`,
            type: image.mime,
            uri:
              Platform.OS === 'android'
                ? image.path
                : image.path.replace('file://', ''),
          },
        }),
      )
        .then(response => {
          console.log(response.data.data);
          dispatch(getMyProfileComplete(response.data.data));
          alert('Successfully changed!');
        })
        .catch(error => {
          console.log(error);
          alert('Something went wrong!');
        });
    });
  };

  return (
    <>
      <Vertical style={styles.header} alignCenter>
        <TouchableOpacity
          onPress={() => avatarChangeActionSheet.current.show()}
          style={styles.avatarContainer}>
          <Avatar
            width={95}
            height={95}
            src={newAvatar === '' ? initialAvatar : newAvatar.path}
          />
          <PhotoIcon
            style={styles.photoIcon}
            width={43}
            height={43}
            color={colors.lightBlue}
          />
        </TouchableOpacity>
        <H2 style={styles.username}>{fullName}</H2>
        <H3 color={colors.grey}>
          {workingPosition} in {placeOfWork}
        </H3>
      </Vertical>
      <ActionSheet
        ref={avatarChangeActionSheet}
        title={'Set your avatar'}
        options={['Take photo', 'Choose photo', 'Cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={2}
        onPress={index => {
          if (index === 0) {
            openCamera();
          }
          if (index === 1) {
            pickImage();
          } else {
          }
        }}
      />
    </>
  );
};

export default ChangeAvatar;
