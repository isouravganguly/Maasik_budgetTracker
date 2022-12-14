import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../Reducers/UserReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, UserReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer:{
    user: UserReducer,
  }

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});