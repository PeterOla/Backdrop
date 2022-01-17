import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import * as reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'Cats',
  storage: AsyncStorage,
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store: any = createStoreWithMiddleware(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

// export default createStoreWithMiddleware(persistedReducer);
