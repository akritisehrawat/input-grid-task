import React, { Component } from 'react';
import Square from './Square';
import ResultSquare from './ResultSquare';

// const breakpoints = {
//   tablet: '720px',
//   mobile: '360px',
// };

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    fontFamily: 'sans-serif',
  }
};

class Grid extends Component {
  state = {
    numSquares: 3,
    numbers: [],
    colors: ['tomato', 'gold', 'hotpink'],
    error: [],
  };

  componentWillMount() {
    const { numSquares } = this.state;
    this.setState(oldState => ({
      ...oldState,
      numbers: new Array(numSquares).fill(0),
      error: new Array(numSquares).fill(false),
    }));
  };

  update = (e) => {
    const name = e.target.name,
          value = e.target.value;
    
    this.setState(oldState => {
      const newError = oldState.error;
      const newStateNumbers = oldState.numbers;

      if (isNaN(value)) {
        newError[name] = true;
        return { ...oldState, error: newError };
      } else {
        newError[name] = false;
      }

      newStateNumbers[name] = value;
      return {
        ...oldState,
        numbers: newStateNumbers,
        error: newError,
      };
    });
  };

  getValue = () => {
    const { numbers } = this.state;
    return numbers.reduce((accum, curr) => { 
      return accum + Number(curr);
    }, 0);
  };

  hasError = (index) => {
    return this.state.error[index];
  };

  render() {
    const { numbers, colors } = this.state;

    return (
      <div style={styles.container}>
        {numbers.map((elem, index) => {
          return <Square
            name={index}
            key={`square-${index}`}
            backgroundColor={colors[index]}
            onChange={this.update}
            hasError={this.hasError(index)}
          />
        })}
        <ResultSquare
          backgroundColor={'lightgreen'}
          onChange={this.update}
          value={this.getValue()}
        />
      </div>
    );
  };
};

export default Grid;
