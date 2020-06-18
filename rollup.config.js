import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'

const globals = {
  react: 'React',
  moment: 'moment',
  classnames: 'classNames',
  'prop-types': 'PropTypes'
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'FlatDatePicker',
      globals
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'FlatDatePicker'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['moment', 'react', 'prop-types', 'classnames'],
  plugins: [
    babel(),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    scss({
      output: pkg.style
    })
  ]
}
