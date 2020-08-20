import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from '../styles/ImageLayout.module.css';

const ImageLayout = ({ small, children, className }) => (
  <div
    className={cn(css.image, small && css.small, className)}
  >
    {children}
  </div>
);

ImageLayout.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ImageLayout.defaultProps = {
  small: false,
  className: '',
};

export default ImageLayout;
