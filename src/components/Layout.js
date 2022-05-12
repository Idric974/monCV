import React from 'react';
import Styles from '../../styles/components/Layout/Layout.module.css';
import CvMenu from './CvMenu/CvMenu';

const Layout = ({ children }) => {
  return (
    <div className={Styles.container}>
      <CvMenu></CvMenu>
      {children}
    </div>
  );
};

export default Layout;
