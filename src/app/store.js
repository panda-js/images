import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../components/image/imageSlice';

export default configureStore({
  reducer: {
    images: imageReducer,
  },
});
