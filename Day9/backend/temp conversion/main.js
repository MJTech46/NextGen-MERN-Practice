import {toCelsius, toKelvin, toFahrenheit} from './conversions.js';

var value = 100;

console.log(value," fahrenheit is ",toCelsius("f", value),"celsius.")
console.log(value," celsius is ",toKelvin("c", value),"Kelvin.")
console.log(value," Kelvin is ",toFahrenheit("k", value),"Fahrenheit.")
