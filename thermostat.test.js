const Thermostat = require('./thermostat')

describe (Thermostat, () => {

  let thermostat = new Thermostat

  describe ('getTemperature', () => {
    it ('has a default temperature of 20', () => {
      expect(thermostat.getTemperature()).toBe (20)
    });
  });

  describe ('up', () => {
    it ('increases the temperature by 1', () => {
      thermostat.up()
      thermostat.up()
      expect(thermostat.getTemperature()).toBe (22);
    });
  });

  describe ('down', () => {
    let thermostat = new Thermostat
    it ('decreases the temperature by 1', () => {
      thermostat.down()
      thermostat.down()
      expect(thermostat.getTemperature()).toBe (18);
    });
  });
});