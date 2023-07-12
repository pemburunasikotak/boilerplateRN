// import API from '@app/services/api';
// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getServiceAPI } from '../../../services/api'
import { setContact } from './action';


// export const facthContact = () =>   async (dispatch: any) => {
//   try {
//     const res = await getServiceAPI()!!.getContact({});
//     console.log("🚀 ~ file: service.tsx:11 ~ facthContact2 ~ res:", res)
//     dispatch(setContact(res.data))
//     // return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.resolve(err);
//   }
// };

// export const facthContact = (search = "", page = 0) => dispatch =>{
// 	dispatch({
// 		type: SET_CONTACT
// 	});
// 	getBhpItem(search, page)
// 	.then(data=>dispatch({
// 		type: SET_CONTACT,
// 		data,
// 	}))
// 	.catch(() => dispatch({
// 		// type: REQUEST_BHP_ITEM_ERROR,
// 	}))
// }