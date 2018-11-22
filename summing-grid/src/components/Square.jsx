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

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '20px',
    fontSize: '20px',
    outline: '0',
  },
  error: ({ show }) => ({
    visibility: show ? 'visible' : 'hidden',
    marginTop: '5px',
  }),
};

class Square extends Component {
  static defaultProps = {
    backgroundColor: 'oldlace',
  };

  render() {
    const {
      backgroundColor,
      onChange,
      name,
      hasError
     } = this.props;

    return (
      <div style={styles.container({ backgroundColor })}>
        <div style={styles.flex}>
          <input
            style={styles.input}
            onChange={(e) => onChange(e)} name={name}
          />
          <div style={styles.error({ show: hasError })}>
            Check this value
          </div>
        </div>
      </div>
    );
  };
};

export default Square;
