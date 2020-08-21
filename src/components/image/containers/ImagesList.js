import React from 'react';
import { useHistory } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import ImagesListLayout from '../components/ImagesListLayout';
import imagePropTypes from '../constants/propTypes';

const ImagesList = ({ images }) => {
  const history = useHistory();

  const handleAddClick = () => {
    history.push('/create');
  };

  const handleEditButtonClick = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleImageClick = (id) => {
    if (isMobile) return;

    history.push(`/edit/${id}`);
  };

  return (
    <ImagesListLayout
      images={images}
      onAddClick={handleAddClick}
      onImageClick={handleImageClick}
      onEditButtonClick={isMobile && handleEditButtonClick}
    />
  );
};

ImagesList.propTypes = {
  images: PropTypes.arrayOf(imagePropTypes),
};

ImagesList.defaultProps = {
  images: [],
};

export default ImagesList;
