import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/ractive-transitions-slide.js',
	dest: 'dist/ractive-transitions-slide.js',
	plugins: [ babel() ],
	format: 'umd',
	moduleName: 'Ractive.transitions.slide'
};
