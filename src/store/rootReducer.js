import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './slices/user';
import {userApi} from './apiSlices';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export {rootReducer};
