'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {

  fetch("/fortune")
    .then((response) => response.text())
    .then((fortunedata) => {
      document.querySelector("#fortune-text").innerHTML = fortunedata;
    });
      
  }
document.querySelector('#get-fortune-button').addEventListener('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`;

  fetch(url)

    .then((response) => response.json())
    .then((weatherdata) =>{
      document.querySelector("#weather-info").innerHTML = `The forcast is ${weatherdata.forecast}`
      // console.log(weatherdata)
    })
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

const melonType = document.querySelector('#melon-type-field').value;
const quantity = document.querySelector('#qty-field').value;

function orderMelons(evt) {
  evt.preventDefault();
  const url = `/order-melons.jason?melonType=${melonType}&quantity=${quantity}`
  fetch(url, {
    method : "POST"
  })
    .then((response) => response.json())
    .then((melondata) =>{
      document.querySelector("#order-status").innerHTML = `hello ${melondata.code} ${melondata.msg}`
    })

  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
