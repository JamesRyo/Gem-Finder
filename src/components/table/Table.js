import React from 'react';
import {
  compose,
  setDisplayName,
} from 'recompose';
import * as r from 'ramda';
import { gu } from '../styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';

const styles = {
  root: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  row: {
    borderBottom: '1px solid #d8d8d8',
  },
  cell: {
    padding: gu / 2,
  },
};

const PureTable = ({
  data,
}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Symbol</TableCell>
        <TableCell numeric>Price (BTC)</TableCell>
        <TableCell numeric>Circ. supply</TableCell>
        <TableCell numeric>Total supply</TableCell>
        <TableCell numeric>Max supply</TableCell>
        <TableCell>Tags</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {r.map((coin) => (
        <TableRow key={coin.id}>
          <TableCell>{coin.name}</TableCell>
          <TableCell>{coin.symbol}</TableCell>
          <TableCell numeric>{Number(coin.quote.BTC.price).toFixed(8)}</TableCell>
          <TableCell numeric>{coin.circulating_supply}</TableCell>
          <TableCell numeric>{coin.total_supply}</TableCell>
          <TableCell numeric>{coin.max_supply}</TableCell>
          <TableCell>
            {r.map((tag) => (
              <Chip label={tag}/>
            ), r.pathOr([], [ 'meta', 'tags' ], coin))}
          </TableCell>
        </TableRow>
      ), r.values(data))}
    </TableBody>
  </Table>
);

const enhance = compose(
  setDisplayName('Table'),
);

export default enhance(PureTable);
