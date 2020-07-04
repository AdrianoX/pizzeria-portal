import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <li>
        <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'}>Check tables id </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>Check new booking</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + '/tables/events/:id'}>Check events id</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + '/tables/events/new'}>Check for new events</Link>
      </li>

    </div>
  );
};

export default Tables;
