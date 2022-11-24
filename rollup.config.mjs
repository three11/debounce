import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/debounce.ts',
	output: {
		dir: 'dist',
		name: 'debounce',
		format: 'umd',
		exports: 'named',
		sourcemap: true
	},
	plugins: [typescript(), commonjs()]
};
