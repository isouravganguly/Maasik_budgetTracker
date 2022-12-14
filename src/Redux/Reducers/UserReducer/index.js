import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'User',

  initialState: {
    name: '',
    age: null,
    phone: '',
    email: '',
  },

  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const {setAge, setEmail, setName, setPhone} = UserSlice.actions;
export default UserSlice.reducer;
