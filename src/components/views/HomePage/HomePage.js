import React from 'react';
import styles from './HomePage.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';

const ReservationAndEvents = [
  {id: '1', status: 'ready', table: '4', time: '17:45', amount: '2'},
  {id: '2', status: 'preparing', table: '2', time: '11:30', amount: '4'},
  {id: '3', status: 'delivered', table: '1', time: '14:15', amount: '2'},
  {id: '4', status: 'delivered', table: '3', time: '19:25', amount: '2'},
];

const OrderStats = [
  {id: '2', location: 'TakeAway', status: 'done', payment: 'card'},
  {id: '3', location: 'TakeAway', status: 'done', payment: 'cash'},
  {id: '1', location: 'Delivery', status: 'done', payment: 'card'},
  {id: '4', location: 'In Restaurant', status: 'done', payment: 'cash'},
];



const HomePage = () => {
  return (
    <div className={styles.component}>
      <h3> Reservations and events</h3>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Amountt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ReservationAndEvents.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.table}
                </TableCell>
                <TableCell>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <h3>Stats</h3>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Place</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {OrderStats.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.location}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.payment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default HomePage;
