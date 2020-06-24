const BikeMontain = require('./bikeMontain');

class InfinityBike{
    constructor(License_montainRacer) {
        return new BikeMontain(License_montainRacer,
            'InfinityBike',
            'Enduro',
             20202,
            'RED',
            '26"',
            'ShimannoRX4-8v',
            '9RSDR0E0001',
            'KYCC0088911',
            'CH0004',
            'KENDAL R26')
    }
}

module.exports = InfinityBike;  