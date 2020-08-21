import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { isMobileOnly, isTablet } from 'react-device-detect';
import Tooltip from '../../tooltip/Tooltip';
import Button from '../../button/Button';
import AddImage from './AddImage';
import ImageLayout from './ImageLayout';
import FittingImage from './FittingImage';
import imagePropTypes from '../constants/propTypes';
import css from '../styles/ImagesListLayout.module.css';

const ImagesListLayout = ({
  images, onAddClick, onImageClick, onEditButtonClick, onKeyPress,
}) => (
  <div className={css.container}>
    <ImageLayout
      className={cn(css.image, isTablet && css.withEditButton)}
      small={isMobileOnly}
    >
      <AddImage onClick={onAddClick} />
    </ImageLayout>
    {images.map((image) => {
      const handleImageClick = () => {
        onImageClick(image.id);
      };

      const handleEditClick = () => {
        onEditButtonClick(image.id);
      };

      return (
        <ImageLayout
          className={cn(css.image, (isMobileOnly || isTablet) && css.withEditButton)}
          key={image.id}
        >
          <div
            onClick={handleImageClick}
            className={css.fullSize}
            onKeyPress={onKeyPress}
            role="button"
            tabIndex="0"
          >
            <Tooltip
              title={image.tooltipText}
              placement={image.tooltipPlacement}
              colorMode={image.tooltipColor}
            >
              <FittingImage url={image.url} fullSize={image.fullSize} />
            </Tooltip>
          </div>
          {onEditButtonClick && (
            <Button type="button" onClick={handleEditClick}>Edit</Button>
          )}
        </ImageLayout>
      );
    })}
  </div>
);

ImagesListLayout.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  onEditButtonClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  images: PropTypes.arrayOf(imagePropTypes),
};

ImagesListLayout.defaultProps = {
  images: [],
  onKeyPress: () => null,
};

export default ImagesListLayout;
