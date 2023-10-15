import { createSlice } from '@reduxjs/toolkit';
import { IinitialStateProjects } from '../types/type';

const initialState: IinitialStateProjects = {
  projects: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state: any, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
