import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import projectsReducer from './projectsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
  },
});
