import React from 'react';

import styles from '../libraries/styles.js';

const Slider = ({ changeHandler }) => (
  <input
    type="range"
    min={0}
    max={100}
    onChange={changeHandler}
    style={styles.slider} />
);// TODO: Variable min,max,defaultValue

export default Slider;
