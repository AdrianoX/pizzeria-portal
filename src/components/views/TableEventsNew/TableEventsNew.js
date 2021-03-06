import React from 'react';
import styles from './TableEventsNew.module.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';


const TableEventsNew = () => {
  return (
    <div className={styles.component}>
      <h2>New Event</h2>
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
              label="Table number"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Guests"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Client name"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Phone"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="E-mail"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Status"
              multiline
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-textarea"
              label="Comments"
              multiline
            />
          </ListItemText>
        </ListItem>
      </List>
      <div className={styles.add}>
        <Button variant="outlined">Add New Event : )</Button>
      </div>
    </div>
  );
};

export default TableEventsNew;
