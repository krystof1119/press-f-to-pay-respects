import React from 'react';

import ReactDOM from 'react-dom';

import styles from './libraries/styles';

import Slider from './components/slider';

const rj = require('robotjs');


class FullDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 50,
      quality: 50,
      fMessage: '',
    };
  }
  doFPress(thisRef) {
    const fstr = thisRef.state.fMessage + 'f';
    thisRef.setState({fMessage: fstr});
    for (let i = 0; i <= thisRef.state.quantity; i++) {
      setTimeout(this.pressF, i * thisRef.state.quality);
    }
  }
  pressF() {
    rj.keyTap('f');
  }
  render() {
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <td>
              F Quality:
            </td>
            <td style={styles.columns['2']}>
              <Slider
                label="quality"
                changeHandler={ (e) => this.setState({quality: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>
              {this.state.quality}
            </td>
          </tr>
          <tr>
            <td>
              F Quantity:
            </td>
            <td style={styles.columns['2']}>
              <Slider
                label="quantity"
                changeHandler={ (e) => this.setState({quantity: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>
              {this.state.quantity}
            </td>
          </tr>
        </tbody>
        </table>
        <br />
        <button onClick={() => this.doFPress(this)} style={styles.button}>Press F</button>
        <br />
        {this.state.fMessage}
      </div>
    );
  }
}


const reactdiv = document.getElementById('reactdiv');
ReactDOM.render(React.createElement(FullDiv), reactdiv);
