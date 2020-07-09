
import React from 'react';
import styles from './TableEvents.module.scss';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const dateInfoTest = {
  tableID: '9',
  ppl: '5',
  date: '2020-05-17',
  time: '16:15',
  name: 'Adrian AdrianoX',
  phone: '666-666-666',
  smokingTable: 'Yes',
};

const TableEvents = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <div className={styles.header}>
        <h2>Events reservation</h2>
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
              {dateInfoTest.tableID}
            </TableCell>
            <TableCell>
              {dateInfoTest.ppl}
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
              {dateInfoTest.phone}
            </TableCell>
            <TableCell>
              {dateInfoTest.name}
            </TableCell>
            <TableCell>
              {dateInfoTest.smokingTable}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.edit}>
        <Button>Edit</Button>
      </div>
    </Paper>

  );
};

export default TableEvents;
