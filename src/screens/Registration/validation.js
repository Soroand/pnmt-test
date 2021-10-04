import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  placeOfWork: Yup.string().required(),
  workingPosition: Yup.string().required(),
  // email: Yup.string(),
  //.email('Invalid email')
  //.required('Required'),

  phone: Yup.string().required(),
  password: Yup.string().required('password is required'),
  confirmPassword: Yup.string()
    .required('confirm password is required')
    .oneOf([Yup.ref('password'), null], 'passwords are not same'),
});

export default validationSchema;
