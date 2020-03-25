import React from 'react';
import Header from '../Header';
import { connect } from 'react-redux';
import styles from './Layout.module.css';

const Layout = ({ children, theme }) => (
  <div className={theme ? styles.Layout : styles.LayoutDark}>
    <Header />
    {children}
  </div>
);

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps)(Layout);
