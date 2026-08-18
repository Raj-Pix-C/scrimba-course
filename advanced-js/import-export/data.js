function travelPackage(dest, km, dur, cost, descrip) {
    this.destination = dest;
    this.distanceKM = km;
    this.travelTimeDays = dur;
    this.priceUSD = cost;
    this.description = descrip;
}


const p1 = new travelPackage(
    'Nova Prime',
     500000000,
     365,
     1000000, 
    `Experience the exotic beauty and thriving ecosystem of Nova Prime.`
)

const p2 = new travelPackage(
    'Lunar Outpost',
     384400,
     3,
     50000, 
    `Visit the first outpost of the moon and witness the calcium-silver surroundings.` 
)

const p3 = new travelPackage(
    'Mars Colony',
     225000000,
     180,
     750000, 
    `Explore the red planet and its unique landscapes, from towering volcanoes to vast canyons.`
)

const p4 = new travelPackage(
    'Titan Station',
     1200000000,
     730,
     2000000, 
    `Discover the mysteries of Saturn's largest moon, Titan, with its thick atmosphere and hydrocarbon lakes.`
)

const p5 = new travelPackage(
    'Europa Base',
     628300000,
     400,
     1500000, 
    `Dive into the icy world of Europa, one of Jupiter's moons, and explore its potential subsurface ocean.`
)


const interplaneteryDestinationArray = [
    p1, p2, p3, p4, p5
]

export {interplaneteryDestinationArray};
