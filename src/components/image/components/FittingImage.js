import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from '../styles/FittingImage.module.css';

const FittingImage = ({ url, fullSize }) => (
  <img
    className={cn(css.image, fullSize && css.fullSize)}
    src={url}
    alt=""
  />
);

FittingImage.propTypes = {
  url: PropTypes.string.isRequired,
  fullSize: PropTypes.bool,
};

FittingImage.defaultProps = {
  fullSize: true,
};

export default FittingImage;
