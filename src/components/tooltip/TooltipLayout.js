import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './TooltipLayout.module.css';

const TooltipLayout = ({
  children,
  title,
  placement,
  colorMode,
  active,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={css.container}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
    {active && title && (
      <div
        className={cn(css.tooltip, css[placement], css[colorMode])}
      >
        {title}
      </div>
    )}
  </div>
);

TooltipLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  colorMode: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default TooltipLayout;
