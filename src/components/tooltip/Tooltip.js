import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import TooltipLayout from './TooltipLayout';
import { PLACEMENT, COLOR_MODE } from './tooltipSettings';

const Tooltip = ({
  children, title, placement, colorMode, forceActive,
}) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = useCallback(
    () => !forceActive && setVisible(true),
    [forceActive],
  );

  const handleMouseLeave = useCallback(
    () => !forceActive && setVisible(false),
    [forceActive],
  );

  return (
    <TooltipLayout
      title={title}
      placement={placement}
      colorMode={colorMode}
      active={forceActive || visible}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </TooltipLayout>
  );
};

Tooltip.PLACEMENT = PLACEMENT;
Tooltip.COLOR_MODE = COLOR_MODE;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  placement: PropTypes.oneOf(Object.values(Tooltip.PLACEMENT)),
  colorMode: PropTypes.oneOf(Object.values(Tooltip.COLOR_MODE)),
  forceActive: PropTypes.bool,
};

Tooltip.defaultProps = {
  title: 'Tooltip text',
  placement: Tooltip.PLACEMENT.TOP,
  colorMode: Tooltip.COLOR_MODE.DARK,
  forceActive: false,
};

export default Tooltip;
