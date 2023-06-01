import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: [],
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, {payload}) {
      return {
        ...state,
        userData: payload,
      };
    },
  },
});

// Reducer (for configureStore)
export default slice.reducer;

// Actions (for dispatch)
export const {setUserData} = slice.actions;
