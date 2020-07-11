
import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const menuTest = [
  {name: '<Menu product (STARTERS) - click to select>', price: '0 '},
  {name: '<Menu product (MAIN DISHES) - click to select>', price: '0 '},
  {name: '<Menu product (FOOD ADDITIONS) - click to select>', price: '0 '},
  {name: '<Menu product (DRINKS) - click to select>', price: '0 '},
];

const WaiterOrderNew = () => {
  return (
    <Paper className={styles.component}>
      <h1># WAITER PANEL #</h1>
      <h3>_________________</h3>
      <h2>New Order</h2>
      <h3>_________________</h3>
      <div className={styles.order}>
        <div className={styles.table}>
          <div className={styles.body}>
            {menuTest.map(row => (
              <div className={styles.menuRow} key={row.name}>
                <div className={styles.position}>
                  {row.name}
                  {' '}
                  {row.price}$
                </div>
                <Button className={styles.optionButtons}>edit</Button>
                <Button className={styles.optionButtons}>delete</Button>
              </div>
            ))}
            <Button className={styles.addInMenu}>+add new menu product list</Button>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.tableOption}>
            <p>Table Number</p>
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
            </Select>
          </div>
          <div className={styles.cost}>
            <p>Cost</p>
            0$
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <Button className={styles.addOrder} variant="outlined">ADD NEW ORDER</Button>
      </div>
    </Paper>
  );
};

export default WaiterOrderNew;
