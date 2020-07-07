import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


const OrderTest = [
  {id: '1', status: 'ready', table: '4', dish: 'double cheese pizza', Quantity: '2'},
  {id: '2', status: 'preparing', table: '2', dish: 'turkey sandwich with black garlic', Quantity: '4'},
  {id: '3', status: 'delivered', table: '1', dish: 'alberto chicken with parmesan', Quantity: '2'},
  {id: '4', status: 'delivered', table: '3', dish: 'alberto salad with white pepper', Quantity: '2'},
];

// const [checked, setChecked] = React.useState(true);

// const handleChange = event => {
//   setChecked(event.target.checked);
// };

const renderActions = (status) => {
  switch (status) {
    case 'ready':
      return (
        <Button>ready</Button>
      );
    case 'preparing':
      return (
        <Button>Preparing</Button>
      );
    case 'delivered':
      return (
        <Button>delivered</Button>
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead className={styles.head}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Dish</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Check</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {OrderTest.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.dish}
              </TableCell>
              <TableCell>
                {row.Quantity}
              </TableCell>
              <TableCell>
                {/* <Checkbox
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
