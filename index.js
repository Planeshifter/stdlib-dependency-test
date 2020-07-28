'use strict';

// MODULES //

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );


// MAIN //

var x = discreteUniform( 1, 6 );
console.log( 'Result of a single dice throw: '+x );