// Use dynamic import to avoid "Cannot use import statement outside a module"
import('./data.js')
	.then( ({ interplaneteryDestinationArray: IPD }) => {
		// console.log('imported data:', IPD);
	})
	.catch(err => {
		console.error('failed to load data.js', err);
	});

import('./data.js')
    .then( ({ longTravelPackages: LTP }) => {
        // console.log('imported long travel packages:', LTP);
    })
    .catch( (err) => {
        console.error('failed to load data.js', err);
    });




console.log(LTP);