class Thermostat {

  constructor() {
    this.temperature = 20
    this.minimumTemperature = 10
    this.powerSavingMode = true
  };

  getTemperature() {
    return this.temperature
  };

  up() {
    this.temperature += 1
  };

  down() {
    if (this.temperature > this.minimumTemperature) {
    this.temperature -= 1
    };
};

};

module.exports = Thermostat
