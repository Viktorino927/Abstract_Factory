class BikeMontain {
    constructor(
      License_montainRacer,
      brand='SPECIALIZED',
      line,
      model=2020,
      material='Carbon Alloy',
      Colour='Negro',
      measure,
      engine,
      serial_number='12345',
      chassis_number='12345R1',
      tires,
    ) {
        this.License_montainRacer=License_montainRacer;
        this.testing={
          brand,
          line,
          model,
          material,
          Colour,
          measure,
          engine,
          serial_number,
          chassis_number,
          tires
        }
    }
    displayTsesting(){
        console.log(this.testing);
    }
  }
  
  module.exports = BikeMontain;
  