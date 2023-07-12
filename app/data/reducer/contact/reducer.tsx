import actionTypes from './constant';
import {contactState, initialContactState} from './type';

const contact = (state: contactState = initialContactState, action: any) => {

  switch (action.type) {
    case actionTypes.SET_CONTACT:
      return {
        ...state,
        data: action.value,
      };
    default:
      return state;
  }
};

export default contact;