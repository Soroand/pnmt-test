import DocumentPicker from 'react-native-document-picker';

export const filePick = async ({ setUploadFiles, uploadFiles }) => {
  try {
    // DocumentPicker.pickMultiple for multi file pick
    const results = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    // --- THIS IS FOR MULTIPLE FILE UPLOAD --- //
    // setUploadFiles([...uploadFiles, ...results]);
    setUploadFiles([results]);
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }
};
