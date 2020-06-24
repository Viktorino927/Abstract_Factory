const BikeMontain = require('./bikeMontain');

class ExtremeBike{
    constructor(License_montainRacer) {
        return new BikeMontain(License_montainRacer,
            'ExtremeBike',
            'DownHill',
             20203,
            'SILVER',
            '29"',
            'ShimannoRX4-9v',
            '9RSDR0E0008',
            'KYDD0088917',
            'RC0004',
            'KENDAL R29')
    }
}

module.exports = ExtremeBike;  