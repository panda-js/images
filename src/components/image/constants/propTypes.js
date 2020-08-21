import PropTypes from 'prop-types';
import { PLACEMENT, COLOR_MODE } from '../../tooltip/tooltipSettings';

/**
 * Common prop types for image object
 */
const imagePropTypes = PropTypes.shape({
  id: PropTypes.string,
  url: PropTypes.string,
  fullSize: PropTypes.bool,
  tooltipText: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(Object.values(PLACEMENT)),
  tooltipColor: PropTypes.oneOf(Object.values(COLOR_MODE)),
});

export default imagePropTypes;
