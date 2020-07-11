import React from 'react';
import styles from './TablesBookingNew.module.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const TableEventsNew = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.h2}>New Booking</h2>
      <List>
        <ListItem>
          <ListItemText>
            <TextField
              id="datetime-local"
              label="Reservation date & time"
              type="datetime-local"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Guests"
              // placeholder="Placeholder"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Table number"
              // placeholder="Placeholder"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Phone"
              // placeholder="Placeholder"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Client name"
              // placeholder="Placeholder"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <div className={styles.tableOption}>
            <p> # 1 - Smoking Table ? # </p>
            <Select
              id="select-table"
              displayEmpty
              value={1}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={2}>No</MenuItem>
            </Select>
          </div>
        </ListItem>
        <ListItem>
          <div className={styles.tableOption}>
            <p># 2 -Animals ? # </p>
            <Select
              id="select-table"
              displayEmpty
              value={1}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={2}>No</MenuItem>
            </Select>
            {/* <div className={styles.tableOption}>
                <p>How many ? </p>
                <TextField className={styles.item} id="standard-basic" label='Animal' variant="filled" />
              </div> */}
          </div>
        </ListItem>
        <ListItem>
          <div className={styles.tableOption}>
            <p># 3 - Payment #</p>
            <Select
              id="select-table"
              displayEmpty
              value={1}
            >
              <MenuItem value={1}>Cash</MenuItem>
              <MenuItem value={2}>Card</MenuItem>
            </Select>
          </div>
        </ListItem>
        {/* <ListItem>
          <div className={styles.tableOption}>
            <p>Animals ? </p>
            <Select
              id="select-table"
              displayEmpty
              value={1}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={2}>No</MenuItem>
            </Select>
          </div>
        </ListItem> */}
        {/* <ListItem>
          <div className={styles.tableOption}>
            <p>How many ? </p>
            <TextField className={styles.item} id="standard-basic" label='Animal' variant="filled" />
          </div>
        </ListItem> */}
      </List>
      <div className={styles.add}>
        <Button variant="outlined">Add New Booking : )</Button>
      </div>
    </div>
  );
};

export default TableEventsNew;
