
import React from 'react';
import styles from './TablesBookingNew.module.scss';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const dateInfoTest = {
  tableID: '66666666',
  ppl: '5',
  date: '2020-07-12',
  time: '18:15',
  name: 'Adrian AdrianoX',
  phone: '666-666-666',
  smokingTable: 'Yes',
};

const TablesBookingNew = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <div className={styles.header}>
        <h2>Tables reservation</h2>
        <h3>Nr: {id}</h3>
      </div>
      <Table className={styles.tableID}>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Amount of ppl</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Smoking Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <Select
                id="select-table"
                displayEmpty
                value={1}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={7}>8</MenuItem>
                <MenuItem value={7}>9</MenuItem>
                <MenuItem value={7}>10</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select
                id="select-table"
                displayEmpty
                value={1}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={7}>8</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <TextField
                id="date"
                type="date"
                value={dateInfoTest.date}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                id="time"
                type="time"
                value={dateInfoTest.time}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                id="standard-search"
                label="Phone number"
                type="search"
                // variant="outlined"
              />
            </TableCell>
            <TableCell>
              <TextField
                id="standard-search"
                label="Name"
                type="search"
                // variant="outlined"
              />

            </TableCell>
            <TableCell>
              <Select
                id="select-table"
                displayEmpty
                value={1}
              >
                <MenuItem value={1}>Yes</MenuItem>
                <MenuItem value={2}>No</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.add}>
        <Button>Add</Button>
      </div>
    </Paper>

  );
};

export default TablesBookingNew;
