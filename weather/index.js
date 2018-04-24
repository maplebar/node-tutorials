"use strict";

const argv = require('yargs').argv;
const request = require('request');

let apiKey = 'dd2dd39b4cd85cca6dea1788aade310c';
let city = argv.c || 'san diego';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err) {
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}.`;
    console.log(message);
  }
});
