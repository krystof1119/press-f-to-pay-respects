import React from 'react';

import styles from '../libraries/styles.js';

const Slider = ({ changeHandler, min, max, defaultVal }) => (// eslint-disable-line react/prop-types
  <input
    type="range"
    min={min}
    max={max}
    defaultValue={defaultVal}
    onChange={changeHandler}
    style={styles.slider}
  />
);

export default Slider;
