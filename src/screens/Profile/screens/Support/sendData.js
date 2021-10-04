import { sendFeedback } from '../../../../services/support/supportMessage';
import { convertToFormData } from '../../../../services/helper';

export const sendData = ({
  uploadFiles,
  problem,
  navigation,
  setUploadFiles,
  setProblem,
  setLoading,
}) => {
  const values = {
    text: problem,
    files: {
      name: uploadFiles[0].name,
      type: uploadFiles[0].type,
      uri: uploadFiles[0].uri,
    },
  };

  sendFeedback(convertToFormData(values))
    .then(response => {
      if (response.data.success) {
        alert('Thank you for reaching out to us!');
        setUploadFiles([]);
        setProblem('');
        setLoading(false);
        navigation.goBack();
      }
    })
    .catch(error => {
      alert('Something went wrong!', error);
    });
};
