import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import css from './Select.module.css';

const Select = forwardRef(({ name, id, value, options }, ref) => (
  <select
    name={name}
    id={id}
    defaultValue={value}
    ref={ref}
    className={css.select}
  >
    {Object.keys(options).map((option) => (
      <option key={option} value={options[option]}>
        {option}
      </option>
    ))}
  </select>
));

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
};

Select.defaultProps = {
  id: '',
  value: '',
};

export default Select;
