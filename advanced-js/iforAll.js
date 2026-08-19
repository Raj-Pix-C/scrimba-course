const distanceTravelledMiles = [267, 345, 234, 190, 299];

const distanceTravelledKillometers = distanceTravelledMiles.map( dist => Math.round(dist * 1.60934));

console.log(distanceTravelledKillometers); 