import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

import TextField from '@material-ui/core/TextField';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';


const reservAndEvents = [

  {mainTime: '19:00', column1: '', row1: '', column2: 'NewBooking', row2: '', column3: '', row3: '', column4: '', row4: '', column5: '', row5: '', column6: 'NewBooking', row6: ''},
  {mainTime: '19:30', column1: '', row1: '', column2: '', row2: '', column3: '', row3: '', column4: '', row4: '', column5: '', row5: '', column6: '', row6: ''},
  {mainTime: '20:00', column1: '', row1: '', column2: '', row2: '', column3: 'NewBooking', row3: '', column4: '', row4: '', column5: 'NewEvent', row5: '', column6: '', row6: ''},
  {mainTime: '20:30', column1: 'NewBooking', row1: '', column2: '', row2: '', column3: '', row3: '', column4: '', row4: '', column5: '', row5: '', column6: '', row6: ''},
  {mainTime: '21:00', column1: '', row1: '', column2: '', row2: '', column3: '', row3: '', column4: 'NewEvent', row4: '', column5: '', row5: '', column6: '', row6: ''},
];

const renderActions = (column, id) => {
  switch (column) {
    case 'NewBooking':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/booking'+ id}>NewBooking</Button>
      );
    case 'NewEvent':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/events'+ id}>NewEvent</Button>
      );
    default:
      return null;
  }
};

const dateTest = {
  date: '2020-06-08T18:30',
};


const Tables = () => {
  return (
    <div className={styles.component}>
      <form className={styles.formSize} >
        <TextField
          id="datetime-local"
          label="NewBooking date"
          type="datetime-local"
          // defaultValue="2017-05-24T10:30"
          className={styles.textField}
          value={dateTest.date}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <Button className={styles.button} component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/new'}>New Booking</Button> */}
        <Button className={styles.button} component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/new'}>New Booking</Button>
        <Button className={styles.button} component ={Link} to={process.env.PUBLIC_URL +'/tables/events/new'}>New Event</Button>
      </form>

      <Table className={styles.tableSize}>
        <TableHead>
          <TableRow>
            <TableCell>RowTime</TableCell>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
            <TableCell>Column 5</TableCell>
            <TableCell>Column 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservAndEvents.map(row => (
            <TableRow key={row.mainTime}>
              <TableCell component="th" scope="row">
                {row.mainTime}
              </TableCell>
              <TableCell>
                {renderActions(row.column1, row.row1)}
              </TableCell>
              <TableCell>
                {renderActions(row.column2, row.row2)}
              </TableCell>
              <TableCell>
                {renderActions(row.column3, row.row3)}
              </TableCell>
              <TableCell>
                {renderActions(row.column4, row.row4)}
              </TableCell>
              <TableCell>
                {renderActions(row.column5, row.row5)}
              </TableCell>
              <TableCell>
                {renderActions(row.column6, row.row6)}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>

    </div>
  );
};

export default Tables;
