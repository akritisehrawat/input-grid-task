import React, { Component } from 'react';

const styles = {
  container: ({ backgroundColor }) => ({
    width: '25%',
    height: '24%',
    backgroundColor,
    minWidth: '300px',
    minHeight: '300px',
  }),
  flex: {
    width: '100%',
    height: '100%',
    fontSize: '24px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class ResultSquare extends Component {
  static defaultProps = {
    backgroundColor: 'white',
  };

  formattedValue = () => {
    const { value } = this.props;
    const peta = 1000000000000000,
          tera = 1000000000000,
          giga = 1000000000,
          mega = 1000000,
          kilo = 1000;

    if (Math.floor(value / peta) !== 0) {
      return `${(value / peta).toFixed(2)}P`;
    } else if (Math.floor(value / tera) !== 0) {
      return `${(value / tera).toFixed(2)}T`;
    } else if (Math.floor(value / giga) !== 0) {
      return `${(value / giga).toFixed(2)}G`;
    } else if (Math.floor(value / mega) !== 0) {
      return `${(value / mega).toFixed(2)}M`;
    } else if (Math.floor(value / kilo) !== 0) {
      return `${(value / kilo).toFixed(2)}K`;
    }
    return value;
  }

  render() {
    const { backgroundColor } = this.props;

    return (
      <div style={styles.container({ backgroundColor })}>
        <div style={styles.flex}>
          Value: { this.formattedValue() }
        </div>
      </div>
    );
  };
};

export default ResultSquare;
