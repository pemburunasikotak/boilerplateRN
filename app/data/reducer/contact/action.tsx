import actionTypes from './constant';

export const setContact = (value: any) => ({
  type: actionTypes.SET_CONTACT,
  value,
});
// export const setDelete = (value: any) => ({
//   type: actionTypes.UPDATE_CONTACT,
//   value,
// });
// export const updateContact = (value: any) => ({
//   type: actionTypes.DELETE_CONTACT,
//   value,
// });