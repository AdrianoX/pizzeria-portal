import React from 'react';
import styles from './WaiterOrder.module.scss';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const menuTest = [
  {name: '(STARTERS) >>> Garlic bread', price: '2$'},
  {name: '(MAIN DISH) >>> Chicken with black garlic', price: '25$'},
  {name: '(FOOD ADDITIONS) >>> Mango salad with white pepper', price: '9$'},
  {name: '(DRINKS) >>> Red whine', price: '15$'},
];

const WaiterOrder = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <h1># WAITER PANEL #</h1>
      <h3>_________________</h3>
      <h2>Order Confirmation</h2>
      <h3>_________________</h3>
      <h3>Nr: {id}</h3>
      <div className={styles.order}>
        <div className={styles.table}>
          <div className={styles.body}>
            {menuTest.map(row => (
              <div className={styles.menuRow} key={row.name}>
                <div className={styles.position}>
                  {row.name}
                  {' '}
                  {row.price}
                </div>
                <Button className={styles.optionButtons}>edit</Button>
                <Button className={styles.optionButtons}>delete</Button>
              </div>
            ))}
            <Button className={styles.addInMenu}></Button>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.tableOption}>
            <p>Table</p>
            <Select
              id="select-table"
              displayEmpty
              value={4}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </div>
          <div className={styles.cost}>
            <p>Cost</p>
            <p>51 $</p>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <Button className={styles.addOrder} variant="outlined">EDIT ORDER</Button>
      </div>
    </Paper>
  );
};

export default WaiterOrder;
