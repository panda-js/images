import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../tooltip/Tooltip';
import imagePropTypes from '../constants/propTypes';
import FittingImage from './FittingImage';
import ImageLayout from './ImageLayout';
import css from '../styles/DetailsLayout.module.css';

const DetailsLayout = ({ image, settings }) => {
  const {
    url,
    fullSize,
    tooltipText,
    tooltipPlacement,
    tooltipColor,
  } = image;

  return (
    <div className={css.container}>
      <ImageLayout>
        <Tooltip
          title={tooltipText}
          placement={tooltipPlacement}
          colorMode={tooltipColor}
          forceActive
        >
          {url ? (
            <FittingImage url={url} fullSize={fullSize} />
          ) : (
            <div className={css.emptyImage} />
          )}
        </Tooltip>
      </ImageLayout>
      <div className={css.settings}>
        {settings}
      </div>
    </div>
  );
};

DetailsLayout.propTypes = {
  settings: PropTypes.node.isRequired,
  image: imagePropTypes,
};

DetailsLayout.defaultProps = {
  image: {},
};

export default DetailsLayout;
