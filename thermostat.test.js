const Thermostat = require('./thermostat')

describe (Thermostat, () => {

  let thermostat = new Thermostat
  
  describe ('getTemperature', () => {
    it ('has a default temperature of 20', () => {
      expect(thermostat.getTemperature()).toBe (20)
    });
  });
});