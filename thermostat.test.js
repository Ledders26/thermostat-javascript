const Thermostat = require('./thermostat')

describe (Thermostat, () => {

  describe ('getTemperature', () => {
    let thermostat = new Thermostat

    it ('has a default temperature of 20', () => {
      expect(thermostat.getTemperature()).toBe (20)
    });
    it ('has the minimum temperature of 10', () => {
      for (let i = 0 ; i < 13 ; i++) {
        thermostat.down();
      };
      expect(thermostat.getTemperature()).toBe (10)
    });
  });

  describe ('up', () => {
    let thermostat = new Thermostat

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

  describe ('powerSavingMode', () => {
    let thermostat = new Thermostat

    it ('is on by default', () => {
      expect(thermostat.powerSavingMode).toBe (true);
    });
    it ('can be turned off', () => {
      thermostat.setPowerSavingMode(false)
      expect(thermostat.powerSavingMode).toBe (false);
    });
    it ('has a maximum temperature of 25 when on', () => {
      thermostat.setPowerSavingMode(true)
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toBe (25);
    });
    it ('has a maximum temperature of 32 when off', () => {
      thermostat.setPowerSavingMode(false)
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toBe (32);
    });
  });

  describe ('reset', () => {
    let thermostat = new Thermostat
    it ('resets the current temperature to 20', () => {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe (20);
    });
  });

  describe ('energyUsage', () => {
    let thermostat = new Thermostat
    it ('should return low-usage when temperature below 18', () => {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe (16);
      expect(thermostat.energyUsage()).toBe ('low-usage')
    });

    it ('should return medium-usage when temperature below 26 but above 18', () => {
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe (20);
      expect(thermostat.energyUsage()).toBe ('medium-usage')
    });

    it ('should return high-usage when temperature above 25', () => {
      thermostat.reset();
      thermostat.setPowerSavingMode(false)
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe (26);
      expect(thermostat.energyUsage()).toBe ('high-usage')
    });
  });
});