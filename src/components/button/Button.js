import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Button.module.css';

const Button = ({ type, color, onClick, children }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    className={cn(css.button, css[color])}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.COLOR = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(Object.values(Button.COLOR)),
};

Button.defaultProps = {
  color: Button.COLOR.DEFAULT,
  onClick: () => null,
};

export default Button;
