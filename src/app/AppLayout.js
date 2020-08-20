import React from 'react';
import PropTypes from 'prop-types';
import css from './AppLayout.module.css';

const AppLayout = ({ children }) => (
  <div className={css.container}>{children}</div>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
