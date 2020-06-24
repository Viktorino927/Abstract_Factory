const BikeMontain = require('./bikeMontain');

class RacerR1{
    constructor(License_montainRacer) {
        return new BikeMontain(License_montainRacer,
            'RacerR1',
            'DownHill',
             20205,
            'SILVER',
            '29"',
            'ShimannoRX4-10v',
            '9RSDR0E0010',
            'X2RACER008891A',
            'R20004',
            'PIRELLI R29')
    }
}

module.exports = RacerR1;  