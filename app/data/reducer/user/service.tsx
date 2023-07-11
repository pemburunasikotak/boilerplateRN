// import API from '@app/services/api';
import API from '../../../services/api'

export const postLogin = () => async () => {
  try {
    const res = await API.reqLogin({});

    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve(err);
  }
};