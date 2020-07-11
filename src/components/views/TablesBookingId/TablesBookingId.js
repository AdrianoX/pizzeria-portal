
import React from 'react';
import styles from './TablesBookingId.module.scss';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const dateInfoTest = {
  tableID: '9',
  ppl: '5',
  date: '2020-07-12',
  time: '17:15',
  name: 'Adrian AdrianoX',
  phone: '666-666-666',
  smokingTable: 'Yes',
  animals: 'No',
  payment: 'Card',
};

const TablesBooking = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <div className={styles.header}>
        <h2>New Booking Confirmation</h2>
        <h3>Nr: {id}</h3>
      </div>
      <Table className={styles.tableID}>
        <TableHead>
          <TableRow>
            <TableCell>Table number</TableCell>
            <TableCell>Guests</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Client name</TableCell>
            <TableCell>Smoking Table</TableCell>
            <TableCell>Animals</TableCell>
            <TableCell>Payment</TableCell>
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
              {dateInfoTest.date}
            </TableCell>
            <TableCell>
              {dateInfoTest.time}
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
            <TableCell>
              {dateInfoTest.animals}
            </TableCell>
            <TableCell>
              {dateInfoTest.payment}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.add}>
        <Button>Edit</Button>
      </div>
    </Paper>

  );
};

export default TablesBooking;
