import React from 'react';
import {
  compose,
  setDisplayName,
  withProps,
} from 'recompose';
import Container from './Container';
import { gu } from '../styles';

const styles = {
  root: {
    paddingTop: gu * 5,
    paddingBottom: gu * 5,
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    fontSize: gu * 1.6,
  },
  lede: {
    marginBottom: gu * 3,
  },
};

const PureFooter = ({ year }) => (
  <footer style={styles.root}>
    <Container>
      <div style={styles.lede}>Lovingly built by shitcoin hunters.</div>
      <div>{`© Sagecity ${year}`}</div>
    </Container>
  </footer>
);

const enhance = compose(
  setDisplayName('Footer'),
  withProps((ownerProps) => ({
    year: new Date().getFullYear(),
  }))
);

export default enhance(PureFooter);
