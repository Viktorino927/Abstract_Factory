const InfinityBike = require('./infintyBike');
const DevilX2 = require('./devilX2');
const ExtremeBike = require('./extremeBike');
const RacerR1 = require('./racerR1');

class AssembleBike {
    create(type, License_plate) {
        switch (type) {
            case 'DevilX2':
                return new DevilX2(License_plate);
                break;
            case 'ExtremeBike':
                return new ExtremeBike(License_plate);
                break;
            case 'InfinityBike':
                return new InfinityBike(License_plate);
                break;
            case 'RacerR1':
                return new RacerR1(License_plate);
                break;

            default:
                console.log('Bike NOT FOUND');
                break;
        }
    }
}

module.exports = new AssembleBike;