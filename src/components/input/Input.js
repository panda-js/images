/* eslint-disable react/jsx-props-no-spreading */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import getErrorMessage from './getErrorMessage';
import css from './Input.module.css';

const Input = forwardRef((
  {
    type, name, id, checked, accept, value, error,
  },
  ref,
) => {
  const props = {
    type,
    name,
    id,
    ref,
  };

  if (type === 'file') {
    props.accept = accept;
  }

  if (type === 'checkbox') {
    props.defaultChecked = checked;
  }

  if (type === 'text') {
    props.defaultValue = value;
  }

  return (
    <div className={css.container}>
      <input
        className={cn(css.input, css[type], error && css.withError)}
        {...props}
      />
      {error && (
        <div className={css.error}>{getErrorMessage(error.type)}</div>
      )}
    </div>
  );
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  checked: PropTypes.bool,
  accept: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.shape({
    type: PropTypes.string,
  }),
};

Input.defaultProps = {
  id: '',
  checked: false,
  accept: '',
  value: '',
  error: null,
};

export default Input;
