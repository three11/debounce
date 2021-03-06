import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/debounce.js',
	output: {
		file: 'dist/debounce.min.js',
		name: 'debounce',
		format: 'umd'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [['@babel/env', { modules: false }]]
		}),
		terser()
	]
};
