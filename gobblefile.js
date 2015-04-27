var gobble = require( 'gobble' );

gobble.cwd( __dirname );

var lib = gobble( 'src' )
	.transform( 'babel', {
		blacklist: [ 'es6.modules', 'useStrict' ],
		sourceMap: false
	})
	.transform( 'esperanto-bundle', {
		entry: 'ractive-transitions-slide',
		type: 'umd',
		name: 'Ractive.transitions.slide',
		sourceMap: false
	});

module.exports = gobble([
	lib,
	lib.transform( 'uglifyjs', { ext: '.min.js' })
]);