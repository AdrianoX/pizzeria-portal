import React from 'react';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';


const MainLayout = ({children}) => {

  return(

    <div className={styles.component}>
      <PageNav />                   {/* <----- CrP2 */}
      {children}                     {/* <----- CrP4/4 */}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
