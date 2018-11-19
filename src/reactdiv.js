import React from 'react';

import ReactDOM from 'react-dom';

var ks = require('node-key-sender');

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min={0} max={100} onChange={this.props.changeHandler} />
    );
  }
}

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
    for (let i = 0; i <= 100 - thisRef.state.quantity; i++) {
      setTimeout(this.pressF(), i * thisRef.state.quality);
    }
  }
  pressF() {
    ks.sendKey("f"); // TODO: This fails spectacularly. Fix it.
  }
  render() {
    return (
      <div>
        F Quality:
        <Slider
          label="quality"
          changeHandler={(e) => this.setState({quality: parseInt(e.target.value)})} />
        {this.state.quality}
        <br />
        F Quantity:
        <Slider
          label="quantity"
          changeHandler={(e) => this.setState({quantity: parseInt(e.target.value)})} />
        {this.state.quantity}
        <br />
        <button onClick={() => this.doFPress(this)}>Press F</button>
        <br />
        {this.state.fMessage}
      </div>
    );
  }
}

const reactdiv = document.getElementById('reactdiv');
ReactDOM.render(React.createElement(FullDiv), reactdiv);
