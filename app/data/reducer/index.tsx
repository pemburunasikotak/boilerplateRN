import {combineReducers} from '../../libraries';

/**
 * ==================================================================
 * REDUCER
 * ==================================================================
 */
import auth from './auth/reducer';
import contact from './contact/reducer';

export const reducer = combineReducers({
  auth,
  contact,
});

/**
 * ==================================================================
 * ACTION / DISPATCHER
 * ==================================================================
 */
export * from './contact/action';
export * from './auth/action';

/**
 * ==================================================================
 * SERVICE
 * ==================================================================
 */
export * from './contact/service';
/**
 * ==================================================================
 * DATA TYPE
 * ==================================================================
 */
export * from './contact/type';
export * from './auth/type';