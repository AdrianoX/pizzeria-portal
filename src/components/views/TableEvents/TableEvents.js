
import React from 'react';
import styles from './TableEvents.module.scss';
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
  tableID: '5',
  ppl: '4',
  date: '2020-07-12',
  time: '17:15',
  name: 'Adrian AdrianoX',
  phone: '666-666-666',
  // smokingTable: 'Yes',
  email: 'adrianox@gmail.com',
  status: 'Confirmed',
  comments: 'Extra chair',
};

const TableEvents = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <div className={styles.header}>
        <h2>New Event Confirmation</h2>
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
            <TableCell>E-mail</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Comments</TableCell>
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
              {dateInfoTest.email}
            </TableCell>
            <TableCell>
              {dateInfoTest.status}
            </TableCell>
            <TableCell>
              {dateInfoTest.comments}
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
