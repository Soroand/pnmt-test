import { getProfile } from '../services/user/user';
import { getProfileComplete } from '../store/user/user.action';

/**
 * Convert formil values to FormDate object
 * @param {Object} values - formik values
 * @returns {FormData}
 */
export function convertToFormData(values) {
  let data = new FormData();
  for (let key in values) {
    data.append(key, values[key]);
  }
  return data;
}

/**
 * Update specific user profile we clicked on ex. Friends page in profile
 * @param {number} id
 * @param {useDispatch func} dispatch
 */
export function specificUserProfileUpdate(id, dispatch, callback) {
  getProfile(id)
    .then(response => {
      dispatch(getProfileComplete({ id, ...response.data.data }));
      if (typeof callback === 'function') {
        callback();
      }
    })
    .catch(error => console.log('error', error));
}
