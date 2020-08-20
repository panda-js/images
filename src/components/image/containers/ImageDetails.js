import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsLayout from '../components/DetailsLayout';
import DetailsSettings from '../components/DetailsSettings';
import imagePropTypes from '../constants/propTypes';
import { addImageAction, updateImageAction, removeImageAction } from '../imageSlice';

const ImageDetails = ({ images }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const savedImage = images.find(image => image.id === id) || { fullSize: true };

  const [editableImage, updateEditableImage] = useState(savedImage);

  const goToMainPage = () => {
    history.push('/');
  };

  const handleSettingsSubmit = () => {
    if (savedImage.id) {
      dispatch(updateImageAction({
        id: savedImage.id,
        ...editableImage,
      }));
    } else {
      dispatch(addImageAction({
        ...editableImage,
      }));
    }
    goToMainPage();
  };

  const handleRemoveImage = () => {
    if (id) dispatch(removeImageAction(id));
    goToMainPage();
  };

  const handleFormChange = (event) => {
    const { target } = event;

    if (target.type === 'file') {
      const reader = new FileReader();

      reader.onload = () => {
        const dataURL = reader.result;
        updateEditableImage({
          ...editableImage,
          url: dataURL,
        });
      };

      if (target.files.length) reader.readAsDataURL(target.files[0]);
    } else {
      updateEditableImage({
        ...editableImage,
        [target.name]: target.type === 'checkbox' ? target.checked : target.value,
      });
    }
  };

  return (
    <DetailsLayout
      image={editableImage}
      settings={
        <DetailsSettings
          image={savedImage}
          onSubmit={handleSettingsSubmit}
          onRemoveImage={handleRemoveImage}
          onSettingsChange={handleFormChange}
          onBackButtonClick={goToMainPage}
        />
      }
    />
  );
};

ImageDetails.propTypes = {
  images: PropTypes.arrayOf(imagePropTypes),
};

ImageDetails.defaultProps = {
  images: [],
};

export default ImageDetails;
