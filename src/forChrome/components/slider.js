import React from 'react';

import styles from '../libraries/styles.js';

const Slider = ({ changeHandler, min, max, defaultVal }) => (
  <input
    type="range"
    min={min}
    max={max}
    defaultValue={defaultVal}
    onChange={changeHandler}
    style={styles.slider} />
);

export default Slider;
