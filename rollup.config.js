import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/ractive-transitions-slide.js',
	plugins: [ babel() ],
	moduleName: 'Ractive.transitions.slide',
	sourceMap: true
};
