import React from 'react';
import {
  compose,
  setDisplayName,
} from 'recompose';
import Container from './Container';
import { gu } from '../styles';

const styles = {
  root: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: gu * 4,
    display: 'inline-block',
    paddingRight: gu,
  },
  brand: {
    fontSize: gu * 2,
  },
};

const PureHeader = () => (
  <header style={styles.root}>
    <Container>
      <h1 style={styles.title}>Gem Finder</h1>
      <span style={styles.brand}>by Sagecity</span>
    </Container>
  </header>
);

const enhance = compose(
  setDisplayName('Header'),
);

export default enhance(PureHeader);
