/* eslint no-param-reassign: 0 */
// We can directly mutate the state because toolkit uses immer under the hood

import { createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
  },
  reducers: {
    getImages: (state,  action) => {
      state.images = action.payload;
    },
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    updateImage: (state, action) => {
      const { images } = state;
      const imageIndex = images.findIndex(image => image.id === action.payload.id);

      if (imageIndex !== -1) images[imageIndex] = action.payload;
    },
    removeImage: (state, action) => {
      const { images } = state;
      const imageIndex = images.findIndex(image => image.id === action.payload);

      if (imageIndex !== -1) images.splice(imageIndex, 1);
    },
  },
});

export const { getImages, addImage, updateImage, removeImage } = imageSlice.actions;

export const selectImages = (state) => state.images;

export const getImagesAction = () => {
  return (dispatch) => {
    axios('http://localhost:3001/images')
      .then(result => {
        dispatch(getImages(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addImageAction = (data) => {
  const id = nanoid();

  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/images',
      data: { id, ...data },
    }).then(result => {
        dispatch(addImage(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateImageAction = (data) => {
  return dispatch => {
    axios({
      method: 'patch',
      url: `http://localhost:3001/images/${data.id}`,
      data,
    }).then(result => {
        dispatch(updateImage(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const removeImageAction = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3001/images/${id}`)
      .then(() => {
        dispatch(removeImage(id));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default imageSlice.reducer;
