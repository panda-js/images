import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles/AddImage.module.css';

const AddImage = ({ onClick, onKeyPress }) => (
  <div
    className={css.addImage}
    onClick={onClick}
    onKeyPress={onKeyPress}
    role="button"
    tabIndex="0"
  >
    <div className={css.container}>Add image</div>
  </div>
);

AddImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
};

AddImage.defaultProps = {
  onKeyPress: () => null,
};

export default AddImage;
