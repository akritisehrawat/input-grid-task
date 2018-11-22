import React, { Component } from 'react';
import Grid from '../components/Grid';

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
};

class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Grid />
      </div>
    );
  };
};

export default Main;
