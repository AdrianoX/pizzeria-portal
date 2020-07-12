
import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';

// import ListItem from '@material-ui/core/ListItem';
// import TextField from '@material-ui/core/TextField';
// import ListItemText from '@material-ui/core/ListItemText';

// const menuTest = [
//   {name: '<Menu product (STARTERS) - click to select>', price: '0 '},
//   {name: '<Menu product (MAIN DISHES) - click to select>', price: '0 '},
//   {name: '<Menu product (FOOD ADDITIONS) - click to select>', price: '0 '},
//   {name: '<Menu product (DRINKS) - click to select>', price: '0 '},
// ];

const WaiterOrderNew = () => {
  return (
    <Paper className={styles.component}>
      <h1># WAITER PANEL #</h1>
      <h3>_______________________________________</h3>
      <h2>New Order</h2>
      <h3>_______________________________________</h3>
      <div className={styles.order}>
        {/* <div className={styles.table}>
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
        </div> */}

        <div className={styles.options}>
          <div className={styles.tableOption}>
            <p>Starters:</p>
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1. Garlic bread 1$</MenuItem>
              <MenuItem>2. Crab sticks 3$</MenuItem>
              <MenuItem>3. Eggs with Dutch mayonnaise 4$</MenuItem>
            </Select>
            <Button className={styles.optionButtons}>edit</Button>
            <Button className={styles.optionButtons}>delete</Button>
            <p>Soup:</p>
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1. Onions soup 4$</MenuItem>
              <MenuItem>2. Tomatoe soup 4$</MenuItem>
              <MenuItem>3. Cream of boletus soup 4$</MenuItem>
            </Select>
            <Button className={styles.optionButtons}>edit</Button>
            <Button className={styles.optionButtons}>delete</Button>
            <p>Salads:</p>
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1. Chicken salad 6$</MenuItem>
              <MenuItem>2. Tuna Salad 6$</MenuItem>
              <MenuItem>3. Fruit Salad 5$</MenuItem>
            </Select>
            <Button className={styles.optionButtons}>edit</Button>
            <Button className={styles.optionButtons}>delete</Button>
            <p>Drinks:</p>
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1. Red wine 7$</MenuItem>
              <MenuItem>2. White wine 6$</MenuItem>
              <MenuItem>3. Beer 2$ </MenuItem>
            </Select>
            <Button className={styles.optionButtons}>edit</Button>
            <Button className={styles.optionButtons}>delete</Button>
            <p>Main dishes:</p>
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1. Chicken with black garlic 16$</MenuItem>
              <MenuItem>2. Pizza with triple garlic cheese 13$</MenuItem>
              <MenuItem>3. XXL Hamburger with hot pickles 15$</MenuItem>
              <MenuItem>4. Lasagne bolognese 14 $</MenuItem>
            </Select>
            <Button className={styles.optionButtons}>edit</Button>
            <Button className={styles.optionButtons}>delete</Button>
          </div>
          <div className={styles.cost}>
            <p>Table Number:</p>
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
            <p>Cost:</p>
            {/* <ListItem>
              <ListItemText>
                <TextField
                  id="standard-textarea"
                  label="Cost"
                  multiline
                />
              </ListItemText>
            </ListItem> */}
            0 $
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
