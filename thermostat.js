class Thermostat {

  constructor() {
    this.temperature = 20
    this.minimumTemperature = 10
    this.powerSavingMode = true
    this.maximumTemperature = 25
  };

  getTemperature() {
    return this.temperature
  };

  up() {
    if(this.temperature < this.maximumTemperature) {
    this.temperature += 1
    };
  };

  down() {
    if (this.temperature > this.minimumTemperature) {
    this.temperature -= 1
    };
  };

  setPowerSavingMode(change) {
    if (change === true || change === false) {
    this.powerSavingMode = change
    };
    this.setMaximumTemperature()
  };

  setMaximumTemperature() {
    if(this.powerSavingMode === true) {
      this.maximumTemperature = 25
    }
    else {
      this.maximumTemperature = 32
    };
  };

  reset() {
    this.temperature = 20
  }

  energyUsage() {
    if(this.temperature < 18) {
      return 'low-usage'
    } else if(this.temperature <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    };
  };
};

module.exports = Thermostat
