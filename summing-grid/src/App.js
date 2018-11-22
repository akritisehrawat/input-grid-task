import React, { Component } from 'react';
import Main from './containers/Main';

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
  },
};

class App extends Component {
  componentWillMount() {
    document.body.style.margin = 0;
  }

  render() {
    return (
      <div className="App" style={styles.container}>
        <Main />
      </div>
    );
  }
}

export default App;
