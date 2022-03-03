const Thermostat = require('./thermostat')

const thermostat = new Thermostat

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const looping = () => {
rl.question('Enter command ', (answer) => {
  if (answer === 'up') {
    thermostat.up()
  } else if (answer === 'down') {
    thermostat.down()
  } else if (answer === 'psm on') {
    thermostat.setPowerSavingMode(true)
  } else if (answer === 'psm off') {
    thermostat.setPowerSavingMode(false)
  };
  if (thermostat.getTemperature() === thermostat.maximumTemperature) {
    console.log(`Maximum temperature of ${thermostat.maximumTemperature} reached.`)
  } else if (thermostat.getTemperature() === thermostat.minimumTemperature) {
    console.log(`Minimum temperature of ${thermostat.minimumTemperature} reached.`)
  } else  {
    console.log(`Temperature is ${thermostat.getTemperature()}`) 
  };
  looping();
});
};

looping();