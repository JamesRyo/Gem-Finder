import React from 'react';

const styles = {
  maxWidth: 1400,
};

const Container = ({ children }) => (
  <div style={styles}>
    {children}
  </div>
);

export default Container;
