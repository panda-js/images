import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Label.module.css';

const Label = ({ htmlFor, text, inline, children }) => (
  <label
    htmlFor={htmlFor}
    className={cn(css.container, inline && css.inline)}
  >
    <span className={css.text}>{text}</span>
    <span className={css.input}>{children}</span>
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

Label.defaultProps = {
  inline: false,
};

export default Label;
