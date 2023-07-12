import {reducer} from '../reducer/index';
import {
  AsyncStorage,
  thunk,
  applyMiddleware,
  createStore,
  persistReducer,
  persistStore,
  logger,
} from '../../libraries';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // add some reducers here to make it permanent
    'auth',
    'contact'
  ],
};

const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
