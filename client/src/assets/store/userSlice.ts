import { createSlice } from '@reduxjs/toolkit';
import { IinitialStateUser, UserDecoded } from '../types/type';
import { jwtDecode } from 'jwt-decode';

const initialState: IinitialStateUser = {
  token: '',
  id: null,
  email: null,
  roles: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: any, action) => {
      state.token = action.payload.token;

      const userDecoded: UserDecoded = jwtDecode(action.payload.token);
      state.email = userDecoded.email;
      state.id = userDecoded.id;
      state.roles = userDecoded.roles.map((e) => {
        return e.value;
      });
    },

    removeUser(state) {
      state.token = '';
      state.id = null;
      state.email = null;
      state.roles = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
