import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/forChrome/reactdiv.jsx',
  output: {
    format: 'iife',
    file: 'gen/chromeBabeled.js',
  },
  plugins: [
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel(),
    commonjs(),
  ],
};
