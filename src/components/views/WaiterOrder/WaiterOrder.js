
import React from 'react';
import styles from './WaiterOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const WaiterOrderNew = () => {
  return (
    <Paper className={styles.component}>
      <h1># WAITER PANEL #</h1>
      <h3>_______________________________________</h3>
      <h2>Order Confirmation</h2>
      <h3>_______________________________________</h3>
      <div className={styles.order}>
        <div className={styles.options}>
          <div className={styles.tableOption}>
            <p>Starters:</p>
            Crab sticks 3$
            <div className={styles.test123}>
              <Button className={styles.optionButtons}>edit</Button>
              <Button className={styles.optionButtons}>delete</Button>
            </div>
            <p>Soup:</p>
            Onions soup 4$
            <div className={styles.test123}>
              <Button className={styles.optionButtons}>edit</Button>
              <Button className={styles.optionButtons}>delete</Button>
            </div>
            <p>Salads:</p>
            Tuna Salad 6$
            <div className={styles.test123}>
              <Button className={styles.optionButtons}>edit</Button>
              <Button className={styles.optionButtons}>delete</Button>
            </div>
            <p>Drinks:</p>
            Beer 2$
            <div className={styles.test123}>
              <Button className={styles.optionButtons}>edit</Button>
              <Button className={styles.optionButtons}>delete</Button>
            </div>
            <p>Main dishes:</p>
            Lasagne 14 $
            <div className={styles.test123}>
              <Button className={styles.optionButtons}>edit</Button>
              <Button className={styles.optionButtons}>delete</Button>
            </div>
          </div>
          <div className={styles.cost}>
            <p>Table Number:</p>
              5
          </div>
          <div className={styles.cost}>
            <p>Cost:</p>
            29 $
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <Button className={styles.addOrder} variant="outlined">CONFIRM THE ORDER</Button>
      </div>
    </Paper>
  );
};

export default WaiterOrderNew;
