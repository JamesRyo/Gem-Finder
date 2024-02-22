import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
};

const App = () => (
  <div style={styles.root}>
    <Header/>
    <main style={styles.main}>
      <Container>

        // @TODO add routing
      </Container>
    </main>
    <Footer/>
  </div>
);

export default App;
